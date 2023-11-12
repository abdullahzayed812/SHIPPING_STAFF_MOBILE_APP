import { Container } from "../components/global/Container";
import { Header } from "../components/global/Header";
import { ShipmentNumberInput } from "../components/scanShipment/InputShipmentNumber";
import { Button } from "../components/global/Button";
import { ImageBox } from "../components/scanShipment/ImageBox";

export function ScanShipmentScreen(): JSX.Element {
  return (
    <>
      <Header text="Scan Shipment" />
      <Container>
        <ShipmentNumberInput />
        <Button text="Scan" onPress={() => {}} />
        <ImageBox />
      </Container>
    </>
  );
}
