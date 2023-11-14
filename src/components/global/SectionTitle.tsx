import { Text } from "react-native";
import { SPACING } from "../../utils/dimensions";
import { FONT_MEDIUM_BOLD } from "../../utils/fonts";

interface SectionTitleProps {
  text: string;
  marginTop?: number;
}

export function SectionTitle({ text, marginTop }: SectionTitleProps): JSX.Element {
  return (
    <Text
      style={{
        marginTop,
        marginBottom: SPACING.SMALL / 2,
        ...FONT_MEDIUM_BOLD,
      }}>
      {text}
    </Text>
  );
}
