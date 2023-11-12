import { ColorValue, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";
import { GLOBAL_STYLES } from "../../utils/styles";
import { COLORS } from "../../utils/colors";
import { FONT_LARGE_BOLD } from "../../utils/fonts";
import { SPACING } from "../../utils/dimensions";

interface ButtonProps {
  text: string;
  onPress: () => void;
  containerStyle?: ViewStyle;
  color?: ColorValue;
}

export function Button({ text, onPress, containerStyle, color }: ButtonProps): JSX.Element {
  return (
    <TouchableOpacity style={[STYLES.container, containerStyle]} onPress={onPress}>
      <Text style={[STYLES.text, { color }]}>{text}</Text>
    </TouchableOpacity>
  );
}

const STYLES = StyleSheet.create({
  container: {
    ...GLOBAL_STYLES.CENTER,
    padding: SPACING.SMALL / 2,
    borderRadius: SPACING.SMALL / 2,
    backgroundColor: COLORS.MAIN,
  },
  text: FONT_LARGE_BOLD,
});
