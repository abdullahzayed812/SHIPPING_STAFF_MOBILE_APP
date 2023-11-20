import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button } from "../components/global/Button";
import { Container } from "../components/global/Container";
import { Header } from "../components/global/Header";
import { ShipmentDetails } from "../components/shipmentDetails/ShipmentDetails";
import { RouteProp } from "@react-navigation/native";
import { ShipmentStackScreenProps } from "../navigations/types";

interface ShipmentDetailsScreenProps {
  navigation: ShipmentStackScreenProps<"ShipmentDetailsScreen">["navigation"];
  route: ShipmentStackScreenProps<"ShipmentDetailsScreen">["route"];
}

export function ShipmentDetailsScreen({
  navigation,
  route,
}: ShipmentDetailsScreenProps): JSX.Element {
  return (
    <>
      <Header text="Shipment Details" />
      <Container spaceBetween>
        <ShipmentDetails detailsObject={route.params} />
        <Button text="Scan Another Shipment" onPress={() => navigation.goBack()} />
      </Container>
    </>
  );
}
