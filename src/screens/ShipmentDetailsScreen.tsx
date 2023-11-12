import { Button } from "../components/global/Button";
import { Container } from "../components/global/Container";
import { Header } from "../components/global/Header";
import { ShipmentDetails } from "../components/shipmentDetails/ShipmentDetails";

export function ShipmentDetailsScreen(): JSX.Element {
  return (
    <>
      <Header text="Shipment Details" />
      <Container spaceBetween>
        <ShipmentDetails shipmentNumber="1234" />
        <Button text="Scan Another Shipment" onPress={() => {}} />
      </Container>
    </>
  );
}
