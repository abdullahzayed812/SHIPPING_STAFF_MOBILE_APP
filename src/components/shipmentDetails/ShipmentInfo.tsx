import { Image, StyleSheet, Text, View } from "react-native";
import { SPACING } from "../../utils/dimensions";
import { FONT_MEDIUM_BOLD } from "../../utils/fonts";
import { FONT_MEDIUM_LIGHT_BOLD } from "../../utils/fonts";
import { IMAGES } from "../../utils/images";
import { GLOBAL_STYLES } from "../../utils/styles";
import { COLORS } from "../../utils/colors";

interface ShipmentInfoProps {
  shipmentNumber: string;
}

export function ShipmentInfo({ shipmentNumber }: ShipmentInfoProps): JSX.Element {
  return (
    <View style={STYLES.container}>
      <View style={STYLES.info}>
        <View style={STYLES.textContainer}>
          <Text style={STYLES.text1}>Number Of Shipment</Text>
          <Text style={STYLES.text2}>{shipmentNumber}</Text>
        </View>
        <Image source={IMAGES.EDIT} />
      </View>
    </View>
  );
}

const STYLES = StyleSheet.create({
  container: {
    padding: SPACING.SMALL,
    borderTopRightRadius: SPACING.SMALL,
    borderTopLeftRadius: SPACING.SMALL,
    elevation: 20,
    backgroundColor: COLORS.WHITE,
  },
  info: { ...GLOBAL_STYLES.SPACE_BETWEEN },
  textContainer: {},
  text1: {
    marginBottom: SPACING.SMALL / 2,
    ...FONT_MEDIUM_BOLD,
  },
  text2: FONT_MEDIUM_LIGHT_BOLD,
});
