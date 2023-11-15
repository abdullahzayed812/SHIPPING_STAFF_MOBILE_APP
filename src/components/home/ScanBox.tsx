import {
  ColorValue,
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { GLOBAL_STYLES } from "../../utils/styles";
import { FONT_LARGE_BOLD } from "../../utils/fonts";
import { SPACING } from "../../utils/dimensions";

interface ScanBoxProps {
  image: ImageSourcePropType;
  text: string;
  backgroundColor: ColorValue;
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse" | undefined;
  color?: ColorValue;
  imageSize?: ImageStyle;
  handlePress: () => void;
}

export function ScanBox({
  image,
  text,
  backgroundColor,
  flexDirection,
  color,
  imageSize,
  handlePress,
}: ScanBoxProps): JSX.Element {
  return (
    <TouchableOpacity
      style={[
        STYLES.container,
        {
          backgroundColor,
          flexDirection: flexDirection ? flexDirection : "row",
        },
      ]}
      onPress={handlePress}>
      <Text style={[STYLES.text, { color }]}>{text}</Text>
      <Image source={image} style={[STYLES.image, imageSize]} />
    </TouchableOpacity>
  );
}

const STYLES = StyleSheet.create({
  container: {
    ...GLOBAL_STYLES.SPACE_BETWEEN,
    padding: SPACING.SMALL,
    borderRadius: SPACING.SMALL / 2,
    height: SPACING.SCAN_BOX_HEIGHT,
    marginBottom: SPACING.LARGE,
  },
  text: { ...FONT_LARGE_BOLD, textAlign: "center" },
  image: {
    width: SPACING.SCAN1_IMAGE_WIDTH,
    height: SPACING.SCAN1_IMAGE_HEIGHT,
    transform: [{ translateY: -SPACING.SMALL }],
  },
});
