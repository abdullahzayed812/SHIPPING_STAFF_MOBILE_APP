import { StyleSheet, TextInput, View, ViewStyle } from "react-native";
import { COLORS } from "../../utils/colors";
import { SPACING } from "../../utils/dimensions";

interface InputProps {
  placeholder: string;
  numeric?: boolean;
  inputContainerStyle?: ViewStyle;
}

export function Input({ placeholder, numeric, inputContainerStyle }: InputProps): JSX.Element {
  const KEYBOARD_TYPE = numeric ? "numeric" : undefined;

  return (
    <View style={[STYLES.container, inputContainerStyle]}>
      <TextInput style={STYLES.input} placeholder={placeholder} keyboardType={KEYBOARD_TYPE} />
    </View>
  );
}

const STYLES = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: COLORS.GRAY,
    borderRadius: SPACING.SMALL / 2,
    paddingHorizontal: SPACING.SMALL / 2,
  },
  input: {},
});
