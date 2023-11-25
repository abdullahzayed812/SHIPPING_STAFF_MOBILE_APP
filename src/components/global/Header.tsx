import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IMAGES } from "../../utils/images";
import { COLORS } from "../../utils/colors";
import { FONT_LARGE_BOLD } from "../../utils/fonts";
import { GLOBAL_STYLES } from "../../utils/styles";
import { SPACING } from "../../utils/dimensions";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigations/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

interface HeaderProps {
  text: string;
  navigateToHomeScreen?: boolean;
}

export function Header({ text, navigateToHomeScreen }: HeaderProps): JSX.Element {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleBackNavigation = () => {
    navigateToHomeScreen
      ? navigation.navigate("TabStackScreen", { screen: "HomeScreen" })
      : navigation.goBack();
  };

  return (
    <View style={STYLES.container}>
      <View />
      <Text style={STYLES.text}>{text}</Text>
      <TouchableOpacity onPress={handleBackNavigation}>
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
