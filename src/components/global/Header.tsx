import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IMAGES } from "../../utils/images";
import { COLORS } from "../../utils/colors";
import { FONT_LARGE_BOLD } from "../../utils/fonts";
import { GLOBAL_STYLES } from "../../utils/styles";
import { SPACING } from "../../utils/dimensions";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
  text: string;
}

export function Header({ text }: HeaderProps): JSX.Element {
  const navigation = useNavigation();

  return (
    <View style={STYLES.container}>
      <View />
      <Text style={STYLES.text}>{text}</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={IMAGES.ARROW} style={STYLES.image} />
      </TouchableOpacity>
    </View>
  );
}

const STYLES = StyleSheet.create({
  container: { ...GLOBAL_STYLES.SPACE_BETWEEN, backgroundColor: COLORS.MAIN },
  text: {
    ...FONT_LARGE_BOLD,
    color: COLORS.WHITE,
    marginLeft: SPACING.LARGE,
  },
  image: {},
});
