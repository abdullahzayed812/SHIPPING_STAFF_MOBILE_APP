import {
  BottomTabDescriptorMap,
  BottomTabNavigationEventMap,
} from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import { NavigationHelpers, ParamListBase, TabNavigationState } from "@react-navigation/native";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { EdgeInsets } from "react-native-safe-area-context";
import { SPACING } from "../../utils/dimensions";
import { COLORS } from "../../utils/colors";
import { FONT_MEDIUM_BOLD } from "../../utils/fonts";

type TabBarProps = {
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
  insets: EdgeInsets;
};

const { width } = Dimensions.get("window");

export function TabBar({ state, navigation, descriptors }: TabBarProps) {
  return (
    <View style={STYLES.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}>
            <Text style={[{ color: isFocused ? "#673ab7" : "#222" }, STYLES.label]}>
              {label.toString() === "Scan" ? "" : label.toString()}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const STYLES = StyleSheet.create({
  container: {
    flexDirection: "row",
    width,
    padding: SPACING.SMALL,
    backgroundColor: COLORS.WHITE,
    borderRadius: SPACING.SMALL,
    elevation: 10,
    marginBottom: SPACING.SMALL / 3,
  },
  label: {
    ...FONT_MEDIUM_BOLD,
    textAlign: "center",
  },
});
