import { StyleSheet, Text, View } from "react-native";
import { Input } from "../global/Input";
import { GLOBAL_STYLES } from "../../utils/styles";
import { FONT_MEDIUM_BOLD } from "../../utils/fonts";
import { SPACING } from "../../utils/dimensions";

export function InputsEdit(): JSX.Element {
  return (
    <View style={STYLES.container}>
      <Input placeholder="Width" numeric inputContainerStyle={STYLES.inputContainer} />
      <Text style={STYLES.text}>X</Text>
      <Input placeholder="Length" numeric inputContainerStyle={STYLES.inputContainer} />
      <Text style={STYLES.text}>X</Text>
      <Input placeholder="Height" numeric inputContainerStyle={STYLES.inputContainer} />
    </View>
  );
}

const STYLES = StyleSheet.create({
  container: GLOBAL_STYLES.DIRECTION_ROW,
  text: { ...FONT_MEDIUM_BOLD, marginHorizontal: SPACING.SMALL / 3 },
  inputContainer: { flex: 1 },
});
