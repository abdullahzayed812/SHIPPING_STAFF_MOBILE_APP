import { Image, StyleSheet, View } from "react-native";
import { IMAGES } from "../../utils/images";
import { GLOBAL_STYLES } from "../../utils/styles";
import { COLORS } from "../../utils/colors";
import { SPACING } from "../../utils/dimensions";

interface ScanTabProps {
  routeName: string;
  focused: boolean;
  size: number;
}

export function TabBarIcon({ routeName, focused, size }: ScanTabProps) {
  let iconName;

  if (routeName === "Home") {
    iconName = focused ? IMAGES.HOME : IMAGES.HOME;
  } else if (routeName === "Scan") {
    iconName = focused ? IMAGES.SCAN_SHIPMENT : IMAGES.SCAN_SHIPMENT;
  } else if (routeName === "Profile") {
    iconName = focused ? IMAGES.PROFILE : IMAGES.PROFILE;
  }

  return routeName === "Scan" ? (
    <View style={STYLES.container}>
      <Image source={iconName} style={STYLES.scanTab} />
    </View>
  ) : (
    <Image source={iconName} style={{ width: size, height: size }} />
  );
}

const STYLES = StyleSheet.create({
  container: {
    ...GLOBAL_STYLES.CENTER,
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: SPACING.MEDIUM,
    backgroundColor: COLORS.MAIN,
  },
  scanTab: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
});
