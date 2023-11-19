import { StyleSheet, TextInput, View, ViewStyle } from "react-native";
import { COLORS } from "../../utils/colors";
import { SPACING } from "../../utils/dimensions";
import { Dispatch, SetStateAction } from "react";

interface InputProps {
  placeholder: string;
  numeric?: boolean;
  inputContainerStyle?: ViewStyle;
  handleChange(text: string): void | Dispatch<SetStateAction<string>>;
  secureTextEntry?: boolean;
  value: string;
}

export function Input({
  placeholder,
  numeric,
  inputContainerStyle,
  handleChange,
  secureTextEntry,
  value,
}: InputProps): JSX.Element {
  const KEYBOARD_TYPE = numeric ? "numeric" : undefined;

  return (
    <View style={[STYLES.container, inputContainerStyle]}>
      <TextInput
        style={STYLES.input}
        placeholder={placeholder}
        keyboardType={KEYBOARD_TYPE}
        onChangeText={(text) => handleChange(text)}
        secureTextEntry={secureTextEntry}
        value={value}
      />
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
