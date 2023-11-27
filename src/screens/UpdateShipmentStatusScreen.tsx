import { SetStateAction, useState } from "react";
import DropdownComponent from "../components/appendToDrs/Dropdown";
import { ShipmentAWB } from "../components/appendToDrs/ShipmentAWBBox";
import { Container } from "../components/global/Container";
import { Header } from "../components/global/Header";
import { ShipmentStackScreenProps } from "../navigations/types";
import { SPACING } from "../utils/dimensions";
import { Input } from "../components/global/Input";
import { SectionTitle } from "../components/global/SectionTitle";
import { View } from "react-native";
import { Button } from "../components/global/Button";
import { ApiManager } from "../api/apiManager";
import { useAppDispatch } from "../app/hooks";
import { showNotificationModal } from "../feature/notification/notificationSlice";
import { Loading } from "../components/global/Loading";

export interface UpdateShipmentStatusRequestData {
  status_id: number;
  comment: string;
  awbs: string[];
}

interface UpdateShipmentStatusScreenProps {
  route: ShipmentStackScreenProps<"UpdateShipmentStatusScreen">["route"];
  navigation: ShipmentStackScreenProps<"UpdateShipmentStatusScreen">["navigation"];
}

const DATA = [
  { label: "Received-inbound Team", value: "3" },
  { label: "Shipment shelved", value: "4" },
  { label: "Shipment out for delivery", value: "6" },
];

export function UpdateShipmentStatusScreen({
  route,
  navigation,
}: UpdateShipmentStatusScreenProps): JSX.Element {
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [comment, setComment] = useState("");

  const { awb } = route.params;

  const handleUpdate = async () => {
    // console.log({ selectedStatus, comment });

    if (!selectedStatus) {
      dispatch(showNotificationModal("Status is requires."));
      return;
    } else if (!comment) {
      dispatch(showNotificationModal("Comment is required."));
      return;
    }

    try {
      setLoading(true);

      const res = await ApiManager.updateShipmentStatus({
        status_id: +selectedStatus,
        awbs: [awb!],
        comment,
      });

      if (res?.message === "Update Shipments Successfully") {
        navigation.navigate("SuccessEditScreen");
      } else {
        dispatch(showNotificationModal("Can't update shipment for this status."));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header text="Update Status" />
      <Container spaceBetween>
        <View>
          <ShipmentAWB awb={awb} />
          <DropdownComponent
            title={"New Status"}
            label={"label"}
            list={DATA}
            onSelect={setSelectedStatus}
            marginTop={SPACING.SMALL}
            updateStatus
          />
          <SectionTitle text="Comment" />
          <Input
            inputFieldStyle={{ height: 100 }}
            inputContainerStyle={{ height: 100 }}
            handleChange={setComment}
            value={comment}
            multiline
          />
        </View>
        <Button text="Update & Save" onPress={handleUpdate} />

        {loading ? <Loading /> : null}
      </Container>
    </>
  );
}
