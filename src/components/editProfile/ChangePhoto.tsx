import { COLORS } from "../../utils/colors";
import { SPACING } from "../../utils/dimensions";
import { Button } from "../global/Button";

export function ChangePhoto(): JSX.Element {
  return (
    <Button
      text="Change Photo"
      onPress={() => {}}
      containerStyle={{
        width: 150,
        backgroundColor: "transparent",
        borderColor: COLORS.MAIN,
        borderWidth: 2,
        alignSelf: "center",
        marginBottom: SPACING.MEDIUM,
        padding: 5,
      }}
    />
  );
}
