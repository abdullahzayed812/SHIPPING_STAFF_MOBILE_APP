import { Image, StyleSheet, Text, View } from "react-native";
import { IMAGES } from "../../utils/images";
import { SPACING } from "../../utils/dimensions";
import { GLOBAL_STYLES } from "../../utils/styles";
import { COLORS } from "../../utils/colors";
import { FONT_MEDIUM_BOLD, FONT_MEDIUM_LIGHT_BOLD } from "../../utils/fonts";
import { Button } from "../global/Button";
import { ShipmentDetailsButtons } from "./ShipmentDetailsButtons";
import { ShipmentInfo } from "./ShipmentInfo";

interface ShipmentDetailsProps {
  shipmentNumber: string;
}

export function ShipmentDetails({ shipmentNumber }: ShipmentDetailsProps): JSX.Element {
  return (
    <View>
      <ShipmentInfo shipmentNumber={shipmentNumber} />
      {/* Expanded Section */}
      <ShipmentDetailsButtons />
    </View>
  );
}

const STYLES = StyleSheet.create({});
