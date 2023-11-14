import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "../global/Button";
import { IMAGES } from "../../utils/images";
import { SuccessBadge } from "./SuccessBadge";
import { GLOBAL_STYLES } from "../../utils/styles";
import { SPACING } from "../../utils/dimensions";
import { FONT_MEDIUM_LIGHT_BOLD, FONT_X_LARGE_BOLD } from "../../utils/fonts";
import { COLORS } from "../../utils/colors";

export function EditSucceeded(): JSX.Element {
  return (
    <View style={STYLES.container}>
      <SuccessBadge />
      <Text style={STYLES.header}>Successful</Text>
      <Text style={STYLES.text}>Products have been modified</Text>
      <Button text="Home Page" onPress={() => {}} containerStyle={STYLES.button} />
    </View>
  );
}

const STYLES = StyleSheet.create({
  container: { ...GLOBAL_STYLES.CENTER, flex: 1 },
  header: { ...FONT_X_LARGE_BOLD, marginVertical: SPACING.SMALL, color: COLORS.MAIN },
  text: FONT_MEDIUM_LIGHT_BOLD,
  button: {
    width: 300,
    marginTop: SPACING.LARGE,
  },
});
