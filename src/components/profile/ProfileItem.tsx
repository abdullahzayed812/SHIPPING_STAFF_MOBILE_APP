import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IMAGES } from "../../utils/images";
import { GLOBAL_STYLES } from "../../utils/styles";
import { SPACING } from "../../utils/dimensions";
import { COLORS } from "../../utils/colors";
import { FONT_MEDIUM_BOLD } from "../../utils/fonts";

interface ProfileItemProps {
  text: string;
  leftImage: ImageSourcePropType;
  logout?: boolean;
}

export function ProfileItem({ text, leftImage, logout }: ProfileItemProps): JSX.Element {
  return (
    <TouchableOpacity style={STYLES.container}>
      <View style={STYLES.leftSection}>
        <Image source={leftImage} style={{ marginRight: SPACING.SMALL }} />
        <Text style={STYLES.text}>{text}</Text>
      </View>
      {!logout ? <Image source={IMAGES.SMALL_ARROW} /> : null}
    </TouchableOpacity>
  );
}

const STYLES = StyleSheet.create({
  container: {
    ...GLOBAL_STYLES.SPACE_BETWEEN,
    paddingHorizontal: SPACING.SMALL,
    paddingVertical: SPACING.SMALL,
    marginBottom: SPACING.SMALL,
    borderRadius: 15,
    backgroundColor: COLORS.WHITE,
    elevation: 10,
  },
  leftSection: GLOBAL_STYLES.DIRECTION_ROW,
  text: FONT_MEDIUM_BOLD,
});
