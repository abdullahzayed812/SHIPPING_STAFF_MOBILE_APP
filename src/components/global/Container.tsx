import React, { PropsWithChildren } from "react";
import { View } from "react-native";
import { COLORS } from "../../utils/colors";
import { GLOBAL_STYLES } from "../../utils/styles";
import { IMAGES } from "../../utils/images";
import { SPACING } from "../../utils/dimensions";

interface Props extends PropsWithChildren {
  changeDefaultBg?: boolean;
  centerContent?: boolean;
  spaceBetween?: boolean;
}

export const Container: React.FC<Props> = ({
  children,
  changeDefaultBg,
  centerContent,
  spaceBetween,
}) => {
  const CENTER = centerContent ? GLOBAL_STYLES.CENTER : null;

  return (
    <View
      style={[
        {
          flex: 1,
          padding: SPACING.SMALL,
          backgroundColor: changeDefaultBg ? COLORS.MAIN : COLORS.WHITE,
        },
        centerContent ? CENTER : null,
        spaceBetween ? { justifyContent: "space-between" } : null,
      ]}>
      {children}
    </View>
  );
};
