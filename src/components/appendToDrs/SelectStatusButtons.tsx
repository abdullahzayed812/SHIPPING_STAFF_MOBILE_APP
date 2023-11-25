import { StyleSheet, View } from "react-native";
import { Button } from "../global/Button";
import { GLOBAL_STYLES } from "../../utils/styles";
import { SPACING } from "../../utils/dimensions";
import { COLORS } from "../../utils/colors";
import { Dispatch, SetStateAction, useState } from "react";

interface SelectStatusButtonsProps {
  setSelectedStatusId: Dispatch<SetStateAction<number>>;
}

export function SelectStatusButtons({
  setSelectedStatusId,
}: SelectStatusButtonsProps): JSX.Element {
  const [activeButton, setActiveButton] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Button
        text="Ready for reverse pickup"
        containerStyle={{
          ...styles.button,
          backgroundColor: !activeButton ? COLORS.MAIN : COLORS.LIGHT_GRAY,
        }}
        onPress={() => {
          setActiveButton(0);
          setSelectedStatusId(34);
        }}
        color={!activeButton ? COLORS.WHITE : COLORS.GRAY}
        textAlign="center"
      />
      <Button
        text="Shipment out for delivery"
        containerStyle={{
          ...styles.button,
          backgroundColor: activeButton ? COLORS.MAIN : COLORS.LIGHT_GRAY,
        }}
        onPress={() => {
          setActiveButton(1);
          setSelectedStatusId(6);
        }}
        color={activeButton ? COLORS.WHITE : COLORS.GRAY}
        textAlign="center"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { ...GLOBAL_STYLES.DIRECTION_ROW, gap: SPACING.SMALL / 2 },
  button: {
    flex: 1,
    height: 80,
    backgroundColor: COLORS.LIGHT_GRAY,
  },
});
