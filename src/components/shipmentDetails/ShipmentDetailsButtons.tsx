import { StyleSheet, View } from "react-native";
import { Button } from "../global/Button";
import { GLOBAL_STYLES } from "../../utils/styles";
import { SPACING } from "../../utils/dimensions";
import { COLORS } from "../../utils/colors";

export function ShipmentDetailsButtons(): JSX.Element {
  return (
    <View style={STYLES.container}>
      <Button
        text="Append To DRS"
        onPress={() => {}}
        containerStyle={STYLES.buttonStyle1}
        color={COLORS.WHITE}
      />
      <Button
        text="Update Status"
        onPress={() => {}}
        containerStyle={STYLES.buttonStyle2}
        color={COLORS.WHITE}
      />
    </View>
  );
}

const STYLES = StyleSheet.create({
  container: GLOBAL_STYLES.DIRECTION_ROW,
  buttonStyle1: {
    borderRadius: 0,
    flex: 1,
    borderBottomLeftRadius: SPACING.SMALL,
  },
  buttonStyle2: {
    flex: 1,
    borderRadius: 0,
    borderBottomRightRadius: SPACING.SMALL,
    backgroundColor: COLORS.SECONDARY,
  },
});
