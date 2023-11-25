import { Image, StyleSheet, Text, View } from "react-native";
import { SectionTitle } from "../global/SectionTitle";
import { IMAGES } from "../../utils/images";
import { SPACING } from "../../utils/dimensions";
import { COLORS } from "../../utils/colors";
import { GLOBAL_STYLES } from "../../utils/styles";
import { FONT_MEDIUM_BOLD } from "../../utils/fonts";

interface ShipmentAWBProps {
  awb: string | undefined;
}

export function ShipmentAWB({ awb }: ShipmentAWBProps): JSX.Element {
  return (
    <View style={STYLES.container}>
      <SectionTitle text="Number of shipment" />
      <View style={STYLES.shipmentAwbBox}>
        <Image source={IMAGES.DETAILS} />
        <Text style={STYLES.awb}>{awb}</Text>
      </View>
    </View>
  );
}

const STYLES = StyleSheet.create({
  container: {
    padding: SPACING.SMALL / 2,
    borderRadius: SPACING.SMALL / 2,
    backgroundColor: COLORS.WHITE,
    elevation: 10,
  },
  shipmentAwbBox: GLOBAL_STYLES.DIRECTION_ROW,
  awb: { ...FONT_MEDIUM_BOLD, marginLeft: SPACING.SMALL / 2 },
});
