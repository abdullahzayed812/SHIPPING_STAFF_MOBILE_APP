import { Container } from "../components/global/Container";
import { Header } from "../components/global/Header";
import { ShipmentNumberInput } from "../components/scanShipment/InputShipmentNumber";
import { Button } from "../components/global/Button";
import { ImageBox } from "../components/scanShipment/ImageBox";
import { useState } from "react";
import { ApiManager } from "../api/apiManager";
import { Loading } from "../components/global/Loading";
import { showNotificationModal } from "../feature/notification/notificationSlice";
import { useAppDispatch } from "../app/hooks";
import { RootStackParamList } from "../navigations/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

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
            params: res?.data,
          });
        }
      } else {
        dispatch(showNotificationModal("Invalid AWB."));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header text="Scan Shipment" navigateToHomeScreen />
      <Container>
        <ShipmentNumberInput inputValue={AWB} setInputValue={setAWB} />
        <Button text="Scan" onPress={handleScanPress} />
        <ImageBox />
      </Container>
      {loading ? <Loading /> : null}
    </>
  );
}
