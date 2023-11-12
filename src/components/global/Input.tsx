import { StyleSheet, TextInput, View } from "react-native";
import { COLORS } from "../../utils/colors";
import { SPACING } from "../../utils/dimensions";

interface InputProps {
  placeholder: string;
}

export function Input({ placeholder }: InputProps): JSX.Element {
  return (
    <View style={STYLES.container}>
      <TextInput style={STYLES.input} placeholder={placeholder} />
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
