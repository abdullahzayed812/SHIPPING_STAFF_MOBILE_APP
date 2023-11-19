import { ActivityIndicator, StyleSheet, View } from "react-native";
import { GLOBAL_STYLES } from "../../utils/styles";

export function Loading(): JSX.Element {
  return (
    <View style={[StyleSheet.absoluteFillObject, GLOBAL_STYLES.CENTER]}>
      <ActivityIndicator size="large" animating />
    </View>
  );
}
