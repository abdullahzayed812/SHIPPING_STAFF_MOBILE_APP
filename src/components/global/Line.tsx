import { View } from "react-native";
import { COLORS } from "../../utils/colors";
import { SPACING } from "../../utils/dimensions";

export function Line(): JSX.Element {
  return (
    <View
      style={{
        width: "90%",
        alignSelf: "center",
        height: 1,
        marginVertical: SPACING.SMALL / 2,
        backgroundColor: COLORS.GRAY,
      }}
    />
  );
}
