import { Container } from "../components/global/Container";
import { Header } from "../components/global/Header";
import { ShipmentNumberInput } from "../components/scanShipment/InputShipmentNumber";
import { Button } from "../components/global/Button";
import { ImageBox } from "../components/scanShipment/ImageBox";
import { useState } from "react";
import { ApiManager } from "../api/apiManager";
import { Loading } from "../components/global/Loading";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigations/types";
import { showNotificationModal } from "../feature/notification/notificationSlice";
import { useAppDispatch } from "../app/hooks";
import { NotificationModal } from "../feature/notification/NotificationModal";

interface ScanShipmentScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export function ScanShipmentScreen({ navigation }: ScanShipmentScreenProps): JSX.Element {
  const dispatch = useAppDispatch();

  const [AWB, setAWB] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleScanPress = async () => {
    try {
      if (AWB.length > 14) {
        setLoading(true);

        const res = await ApiManager.getShipmentDetails(AWB);

        if (res?.data?.awb) {
          setAWB("");
          navigation.navigate("ShipmentStackScreen", {
            screen: "ShipmentDetailsScreen",
            params: {
              awb: res?.data?.awb,
              store: res?.data?.store,
              receiver_name: res?.data?.receiver_name,
              receiver_city: res?.data?.receiver_city,
              receiver_address: res?.data?.receiver_address,
              status: res?.data?.status,
              delivery_attempts: res?.data?.delivery_attempts,
              quantity: res?.data?.quantity,
            },
          });
        }
      } else {
        dispatch(showNotificationModal());
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header text="Scan Shipment" />
      <Container>
        <ShipmentNumberInput inputValue={AWB} setInputValue={setAWB} />
        <Button text="Scan" onPress={handleScanPress} />
        <ImageBox />
      </Container>
      {loading ? <Loading /> : null}
      <NotificationModal message="Invalid AWB." />
    </>
  );
}
