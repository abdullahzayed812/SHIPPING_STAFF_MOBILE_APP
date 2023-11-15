import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../types";
import { HomeScreen } from "../../screens/HomeScreen";
import { ScanShipmentScreen } from "../../screens/ScanShipmentsScreen";

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export function HomeStackScreen() {
  return (
    <HomeStack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="ScanShipmentScreen" component={ScanShipmentScreen} />
    </HomeStack.Navigator>
  );
}
