import { StyleSheet, Text, View } from "react-native";
import { Input } from "../global/Input";
import { FONT_MEDIUM_BOLD } from "../../utils/fonts";
import { SPACING } from "../../utils/dimensions";
import { Dispatch, SetStateAction } from "react";

interface ShipmentNumberInputProps {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
}

export function ShipmentNumberInput({
  inputValue,
  setInputValue,
}: ShipmentNumberInputProps): JSX.Element {
  return (
    <View style={STYLES.container}>
      <Text style={STYLES.text}>Enter the shipment number</Text>
      <Input placeholder="Shipment Number" handleChange={setInputValue} value={inputValue} />
    </View>
  );
}

const STYLES = StyleSheet.create({
  container: {
    marginBottom: SPACING.SMALL,
  },
  text: {
    ...FONT_MEDIUM_BOLD,
    textAlign: "center",
    marginBottom: SPACING.SMALL,
  },
});
