import { StyleSheet, Text, View } from "react-native";
import { GLOBAL_STYLES } from "../../utils/styles";
import { COLORS } from "../../utils/colors";
import { FONT_LARGE_BOLD, FONT_MEDIUM_BOLD } from "../../utils/fonts";
import { SPACING } from "../../utils/dimensions";

interface ShipmentDetailsItemProps {
  itemName: string;
  value: string | number;
}

export function ShipmentDetailsItem({ itemName, value }: ShipmentDetailsItemProps): JSX.Element {
  return (
    <View style={STYLES.container}>
      <View style={[GLOBAL_STYLES.DIRECTION_ROW, { width: "50%" }]}>
        <View style={STYLES.bullet} />
        <Text style={STYLES.key}>{itemName}</Text>
      </View>
      <Text style={STYLES.value}>{value}</Text>
    </View>
  );
}

const STYLES = StyleSheet.create({
  container: GLOBAL_STYLES.DIRECTION_ROW,
  bullet: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: COLORS.MAIN,
  },
  key: { ...FONT_MEDIUM_BOLD, fontSize: 14 },
  value: { ...FONT_LARGE_BOLD, width: "50%", fontSize: 14, textAlign: "left", color: COLORS.GRAY },
});
