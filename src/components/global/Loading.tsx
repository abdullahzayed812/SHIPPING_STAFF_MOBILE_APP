import { ActivityIndicator, View } from "react-native";

export function Loading(): JSX.Element {
  return (
    <View>
      <ActivityIndicator size="large" animating />
    </View>
  );
}
