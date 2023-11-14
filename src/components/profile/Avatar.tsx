import { Image, StyleSheet, Text, View } from "react-native";
import { IMAGES } from "../../utils/images";
import { GLOBAL_STYLES } from "../../utils/styles";
import { FONT_MEDIUM_BOLD } from "../../utils/fonts";
import { SPACING } from "../../utils/dimensions";

export function Avatar(): JSX.Element {
  return (
    <View style={STYLES.container}>
      <Image source={IMAGES.AVATAR1} />
      <Text style={STYLES.name}>Ahmed Amin</Text>
    </View>
  );
}

const STYLES = StyleSheet.create({
  container: { ...GLOBAL_STYLES.CENTER, marginVertical: SPACING.MEDIUM },
  name: FONT_MEDIUM_BOLD,
});
