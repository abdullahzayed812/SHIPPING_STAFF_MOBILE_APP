import { Image, StyleSheet, Text, View } from "react-native";
import { SPACING } from "../../utils/dimensions";
import { FONT_MEDIUM_BOLD } from "../../utils/fonts";
import { FONT_MEDIUM_LIGHT_BOLD } from "../../utils/fonts";
import { IMAGES } from "../../utils/images";
import { GLOBAL_STYLES } from "../../utils/styles";
import { COLORS } from "../../utils/colors";
import { SectionTitle } from "../global/SectionTitle";

interface ShipmentInfoProps {
  shipmentNumber: string;
}

export function ShipmentInfo({ shipmentNumber }: ShipmentInfoProps): JSX.Element {
  return (
    <View style={STYLES.container}>
      <View style={STYLES.info}>
        <View style={STYLES.textContainer}>
          <SectionTitle text="Number Of Shipment" />
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
  text2: FONT_MEDIUM_LIGHT_BOLD,
});
