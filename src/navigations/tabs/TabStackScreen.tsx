import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../../screens/HomeScreen";
import { ProfileScreen } from "../../screens/ProfileScreen";
import { ScanShipmentScreen } from "../../screens/ScanShipmentsScreen";
import { TabBar } from "./TabBar";
import { IMAGES } from "../../utils/images";
import { Image } from "react-native";
import { FONT_MEDIUM_BOLD } from "../../utils/fonts";
const TabStack = createBottomTabNavigator();

export function TabStackScreen() {
  return (
    <TabStack.Navigator
      initialRouteName="Home"
      // tabBar={(props) => <TabBar {...props} />}

      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          const TAB_SCAN_SIZE = route.name === "Scan" ? size * 2 : size;

          if (route.name === "Home") {
            iconName = focused ? IMAGES.HOME : IMAGES.HOME;
          } else if (route.name === "Scan") {
            iconName = focused ? IMAGES.SCAN_SHIPMENT : IMAGES.SCAN_SHIPMENT;
          } else if (route.name === "Profile") {
            iconName = focused ? IMAGES.PROFILE : IMAGES.PROFILE;
          }

          // You can return any component that you like here!
          return (
            <Image
              source={iconName}
              style={{
                width: TAB_SCAN_SIZE,
                height: TAB_SCAN_SIZE,
                marginBottom: -10,
                resizeMode: "contain",
              }}
            />
          );
        },
        headerShown: false,
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { borderRadius: 25, bottom: 15, height: 70, elevation: 20 },
        tabBarLabelStyle: { ...FONT_MEDIUM_BOLD, fontSize: 14, lineHeight: 30 },
      })}>
      <TabStack.Screen name="Home" component={HomeScreen} />
      <TabStack.Screen name="Scan" component={ScanShipmentScreen} options={{ tabBarLabel: "" }} />
      <TabStack.Screen name="Profile" component={ProfileScreen} />
    </TabStack.Navigator>
  );
}
