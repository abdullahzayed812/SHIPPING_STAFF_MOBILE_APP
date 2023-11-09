import { Image, StyleSheet, Text, View } from "react-native";
import { IMAGES } from "../../utils/images";
import { GLOBAL_STYLES } from "../../utils/styles";
import { FONT_MEDIUM_BOLD } from "../../utils/fonts";
import { SPACING } from "../../utils/dimensions";

export function UserInfo(): JSX.Element {
  return (
    <View style={STYLES.container}>
      <Text style={STYLES.text}>{`Hello\nAhmed adel`}</Text>
      <Image source={IMAGES.AVATAR} style={STYLES.avatar} />
    </View>
  );
}

const STYLES = StyleSheet.create({
  container: {
    ...GLOBAL_STYLES.SPACE_BETWEEN,
    marginBottom: SPACING.LARGE * 1.5,
  },
  text: FONT_MEDIUM_BOLD,
  avatar: {
    width: SPACING.AVATAR_SIZE,
    height: SPACING.AVATAR_SIZE,
  },
});
