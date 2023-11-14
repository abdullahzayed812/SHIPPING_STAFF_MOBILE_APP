import { View } from "react-native";
import { Input } from "../global/Input";
import { SPACING } from "../../utils/dimensions";
import { Button } from "../global/Button";

export function EditProfileInputs(): JSX.Element {
  return (
    <View>
      <Input placeholder="Name" />
      <Input placeholder="Email" inputContainerStyle={{ marginVertical: SPACING.SMALL }} />
      <Input placeholder="Phone Number" />
      <Button text="Save" onPress={() => {}} containerStyle={{ marginTop: SPACING.SMALL }} />
    </View>
  );
}
