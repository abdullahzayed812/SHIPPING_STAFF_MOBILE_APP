import { Image, StyleSheet, View } from "react-native";
import { IMAGES } from "../../utils/images";
import { COLORS } from "../../utils/colors";
import { GLOBAL_STYLES } from "../../utils/styles";

export function SuccessBadge(): JSX.Element {
  return (
    <View style={STYLES.container}>
      <Image source={IMAGES.TRUE} />
    </View>
  );
}

const STYLES = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    borderRadius: 75,
    ...GLOBAL_STYLES.CENTER,
    backgroundColor: COLORS.MAIN,
  },
});
