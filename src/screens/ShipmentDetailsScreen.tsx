import { useAppDispatch } from "../app/hooks";
import { Button } from "../components/global/Button";
import { Container } from "../components/global/Container";
import { Header } from "../components/global/Header";
import { ShipmentDetails } from "../components/shipmentDetails/ShipmentDetails";
import { openScanner, openScannerModal } from "../feature/scanner/scannerSlice";
import { ShipmentStackScreenProps } from "../navigations/types";
interface ShipmentDetailsScreenProps {
  navigation: ShipmentStackScreenProps<"ShipmentDetailsScreen">["navigation"];
  route: ShipmentStackScreenProps<"ShipmentDetailsScreen">["route"];
}

export function ShipmentDetailsScreen({
  navigation,
  route,
}: ShipmentDetailsScreenProps): JSX.Element {
  const dispatch = useAppDispatch();

  const { from } = route.params;

  const handleScanAnother = () => {
    navigation.goBack();

    if (from === "scanner") {
      dispatch(openScanner());
      dispatch(openScannerModal());
    }
  };

  return (
    <>
      <Header text="Shipment Details" navigateToHomeScreen />
      <Container spaceBetween>
        <ShipmentDetails detailsObject={route.params} />
        <Button text="Scan Another Shipment" onPress={handleScanAnother} />
      </Container>
    </>
  );
}
