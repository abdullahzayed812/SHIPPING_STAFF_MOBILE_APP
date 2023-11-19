import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button } from "../components/global/Button";
import { Container } from "../components/global/Container";
import { Header } from "../components/global/Header";
import { ShipmentDetails } from "../components/shipmentDetails/ShipmentDetails";
import { ShipmentStackParamList } from "../navigations/types";
import { RouteProp } from "@react-navigation/native";

interface ShipmentDetailsScreenProps {
  navigation: NativeStackNavigationProp<ShipmentStackParamList, "ShipmentDetailsScreen">;
  route: RouteProp<ShipmentStackParamList, "ShipmentDetailsScreen">;
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
