import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { InputsEdit } from "../components/editShipment/InputsEdit";
import { Button } from "../components/global/Button";
import { Container } from "../components/global/Container";
import { Header } from "../components/global/Header";
import { SectionTitle } from "../components/global/SectionTitle";
import { SPACING } from "../utils/dimensions";
import { RouteProp } from "@react-navigation/native";
import { useEffect, useRef, useState } from "react";
import { ApiManager } from "../api/apiManager";
import { Loading } from "../components/global/Loading";
import { Line } from "../components/global/Line";
import { FlatList } from "react-native";
import { ShipmentStackScreenProps } from "../navigations/types";

interface ShipmentDimensions {
  width: number;
  height: number;
  length: number;
  weight: number;
}

interface ShipmentInfo {
  status: number;
  quantity: number;
  weights: ShipmentDimensions[];
}

interface EditShipmentScreenProps {
  navigation: ShipmentStackScreenProps<"EditShipmentScreen">["navigation"];
  route: ShipmentStackScreenProps<"EditShipmentScreen">["route"];
}

export function EditShipmentScreen({ navigation, route }: EditShipmentScreenProps): JSX.Element {
  const shipmentDimensionsRef = useRef<ShipmentDimensions[]>([]);

  const [shipmentInfo, setShipmentInfo] = useState<ShipmentInfo>();
  const [loading, setLoading] = useState(false);

  const { awb } = route.params;

  const getShipmentDimensions = async () => {
    try {
      setLoading(true);

      const res = await ApiManager.getShipmentDimensions(awb);

      if (res?.status === 200) {
        setShipmentInfo(res);
        shipmentDimensionsRef.current = res?.weights;
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      await getShipmentDimensions();
    })();
  }, []);

  const observeChange = (index: number, value: string, placeholder: string): void => {
    shipmentDimensionsRef.current[index] = {
      ...shipmentDimensionsRef.current[index],
      [placeholder]: value,
    };
  };

  const updateShipmentsDimensions = async () => {
    try {
      setLoading(true);

      const res = await ApiManager.updateShipmentDimensions({
        awb,
        weights: shipmentDimensionsRef.current,
      });

      if (res?.status === 200) {
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
      <Header text="Edit Shipment" />
      <Container>
        <SectionTitle text="Product dimensions (cm)" />
        <FlatList
          data={shipmentInfo?.weights}
          keyExtractor={(_, index) => index.toString()}
          ItemSeparatorComponent={() => <Line />}
          renderItem={({ item, index }) => (
            <InputsEdit
              width={item?.width}
              length={item?.length}
              height={item?.height}
              weight={item?.weight}
              index={index}
              observeChange={observeChange}
            />
          )}
        />
        <Button
          text="Save"
          onPress={updateShipmentsDimensions}
          containerStyle={{ marginTop: SPACING.MEDIUM }}
        />
      </Container>
      {loading ? <Loading /> : null}
    </>
  );
}
