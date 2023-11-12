import { Image, StyleSheet, View } from "react-native";
import { IMAGES } from "../../utils/images";
import { GLOBAL_STYLES } from "../../utils/styles";
import { SPACING } from "../../utils/dimensions";

export function ImageBox(): JSX.Element {
  return (
    <View style={STYLES.container}>
      <Image source={IMAGES.BOX} />
    </View>
  );
}

const STYLES = StyleSheet.create({
  container: { ...GLOBAL_STYLES.CENTER, marginTop: SPACING.LARGE * 3 },
});
