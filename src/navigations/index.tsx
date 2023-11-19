import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SplashScreen } from "../screens/SplashScreen";
import { TabStackScreen } from "./tabs/TabStackScreen";
import { RootStackParamList } from "./types";
import { LoginScreen } from "../screens/LoginScreen";
import { ShipmentDetailsScreen } from "../screens/ShipmentDetailsScreen";
import { EditShipmentScreen } from "../screens/EditShipments";
import { ShipmentStackScreen } from "./stacks/ShipmentStack";

const RootStack = createNativeStackNavigator<RootStackParamList>();

export function RootStackScreen() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="TabStackScreen" component={TabStackScreen} />
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen name="LoginScreen" component={LoginScreen} />
        <RootStack.Screen name="ShipmentStackScreen" component={ShipmentStackScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
