import { EditSucceeded } from "../components/editShipment/EditSucceeded";
import { InputsEdit } from "../components/editShipment/InputsEdit";
import { Button } from "../components/global/Button";
import { Container } from "../components/global/Container";
import { Header } from "../components/global/Header";
import { Input } from "../components/global/Input";
import { SectionTitle } from "../components/global/SectionTitle";
import { SPACING } from "../utils/dimensions";

export function EditShipmentScreen(): JSX.Element {
  return (
    <>
      <Header text="Edit Shipment" />
      <Container>
        {/* <SectionTitle text="Product dimensions (cm)" />
        <InputsEdit />
        <SectionTitle text="Weight" marginTop={SPACING.MEDIUM} />
        <Input placeholder="Weight" />
        <Button text="Save" onPress={() => {}} containerStyle={{ marginTop: SPACING.MEDIUM }} /> */}
        <EditSucceeded />
      </Container>
    </>
  );
}
