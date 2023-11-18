import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../../screens/HomeScreen";
import { ProfileScreen } from "../../screens/ProfileScreen";
import { FONT_MEDIUM_BOLD } from "../../utils/fonts";
import { TabBarIcon } from "./TabBarIcon";
import { COLORS } from "../../utils/colors";
import { TabStackParamList } from "../types";
import { Scanner } from "../../feature/scanner/Scanner";
import { useAppDispatch } from "../../app/hooks";
import { openScanner, openScannerModal } from "../../feature/scanner/scannerSlice";

const TabStack = createBottomTabNavigator<TabStackParamList>();

export function TabStackScreen() {
  const dispatch = useAppDispatch();

  return (
    <TabStack.Navigator
      initialRouteName="HomeScreen"
      // tabBar={(props) => <TabBar {...props} />}

      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return <TabBarIcon routeName={route.name} focused={focused} size={size} />;
        },
        headerShown: false,
        tabBarActiveTintColor: COLORS.MAIN,
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          width: "95%",
          alignSelf: "center",
          borderRadius: 25,
          bottom: 15,
          height: 70,
          elevation: 20,
        },
        tabBarLabelStyle: { ...FONT_MEDIUM_BOLD, fontSize: 14, lineHeight: 35, marginTop: -10 },
      })}>
      <TabStack.Screen name="HomeScreen" component={HomeScreen} options={{ tabBarLabel: "Home" }} />
      <TabStack.Screen
        name="ScanStackScreen"
        component={Scanner}
        options={{ tabBarLabel: "" }}
        listeners={{
          tabPress: (e) => {
            // Prevent default action
            // e.preventDefault();
            dispatch(openScannerModal());
            dispatch(openScanner());
          },
        }}
      />
      <TabStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ tabBarLabel: "Profile" }}
      />
    </TabStack.Navigator>
  );
}
