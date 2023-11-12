import { StyleSheet, Text, View } from "react-native";
import { Input } from "../global/Input";
import { FONT_LARGE_BOLD, FONT_MEDIUM_BOLD } from "../../utils/fonts";
import { SPACING } from "../../utils/dimensions";

export function ShipmentNumberInput(): JSX.Element {
  return (
    <View style={STYLES.container}>
      <Text style={STYLES.text}>Enter the shipment number</Text>
      <Input placeholder="Shipment Number" />
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
