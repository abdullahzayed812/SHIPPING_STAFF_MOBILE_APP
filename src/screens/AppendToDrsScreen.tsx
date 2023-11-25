import { View } from "react-native";
import DropdownComponent from "../components/appendToDrs/Dropdown";
import { SelectShipmentStatus } from "../components/appendToDrs/SelectShipmentStatus";
import { ShipmentAWB } from "../components/appendToDrs/ShipmentAWBBox";
import { Button } from "../components/global/Button";
import { Container } from "../components/global/Container";
import { Header } from "../components/global/Header";
import { SPACING } from "../utils/dimensions";
import { useEffect, useState } from "react";
import { ApiManager } from "../api/apiManager";
import { Loading } from "../components/global/Loading";
import { ShipmentStackScreenProps } from "../navigations/types";
import { useDispatch } from "react-redux";
import { showNotificationModal } from "../feature/notification/notificationSlice";

interface AppendToDrsScreenProps {
  route: ShipmentStackScreenProps<"AppendToDrsScreen">["route"];
  navigation: ShipmentStackScreenProps<"AppendToDrsScreen">["navigation"];
}

export type ShipmentToUpdateType = {
  messenger_id: number;
  // Ready for reverse pickup = 34 || Shipment out for devliery = 6
  status_id: number;
  drs_id: number;
  awbs: string[];
};

export type Item = { [index: string]: string };

export function AppendToDrsScreen({ route, navigation }: AppendToDrsScreenProps): JSX.Element {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const [routesList, setRoutesList] = useState<Item[]>([]);
  const [driverNamesList, setDriverNames] = useState<Item[]>([]);
  const [DRSList, setDRSList] = useState<Item[]>([]);

  const [selectedRouteId, setSelectedRouteId] = useState("");
  const [selectedDriverId, setSelectedDriverId] = useState("");
  const [selectedDRSId, setSelectedDRSId] = useState("");
  const [selectedStatusId, setSelectedStatusId] = useState<number>(6);

  const { awb } = route.params;

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        const res = await ApiManager.getRoutes();

        if (res?.data.length > 0) {
          setRoutesList(res?.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        const res = await ApiManager.getDriversName(+selectedRouteId);

        if (res?.data?.length > 0) {
          setDriverNames(res?.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [selectedRouteId]);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        const res = await ApiManager.getDrsNames(+selectedDriverId);
        console.log(res);

        if (res?.data?.length > 0) {
          setDRSList(res?.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [selectedDriverId]);

  const handleUpdate = async () => {
    try {
      setLoading(true);

      if (!selectedStatusId) {
        dispatch(showNotificationModal("Status is required."));
        return;
      } else if (!selectedRouteId) {
        dispatch(showNotificationModal("Route name is required."));
        return;
      } else if (!selectedDriverId) {
        dispatch(showNotificationModal("Driver name is required."));
        return;
      } else if (!selectedDRSId) {
        dispatch(showNotificationModal("DRS barcode is required."));
        return;
      }

      const res = await ApiManager.appendShipmentToDRS({
        messenger_id: +selectedDriverId,
        status_id: selectedStatusId,
        drs_id: +selectedDRSId,
        awbs: [awb!],
      });

      if (res?.error) {
        dispatch(showNotificationModal(res?.error));
      } else {
        navigation.navigate("SuccessEditScreen");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header text="Append To DRS" />
      <Container spaceBetween>
        <View>
          <ShipmentAWB awb={awb} />
          <SelectShipmentStatus setSelectedStatusId={setSelectedStatusId} />

          <View style={{ marginVertical: SPACING.SMALL }}>
            <DropdownComponent
              title="Route name"
              list={routesList}
              label="code"
              onSelect={setSelectedRouteId}
            />
            <DropdownComponent
              title="Driver name"
              list={driverNamesList}
              label="name"
              onSelect={setSelectedDriverId}
            />
            <DropdownComponent
              title="DRS name"
              list={DRSList}
              label="barcode"
              onSelect={setSelectedDRSId}
            />
          </View>
        </View>

        <Button text="Update & Save" onPress={handleUpdate} />

        {loading ? <Loading /> : null}
      </Container>
    </>
  );
}
