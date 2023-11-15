import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SplashScreen } from "../screens/SplashScreen";
import { TabStackScreen } from "./tabs/TabStackScreen";
import { RootStackParamList } from "./types";

const RootStack = createNativeStackNavigator<RootStackParamList>();

export function RootStackScreen() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="TabStackScreen" component={TabStackScreen} />
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        {/* <RootStack.Screen name="LoginScreen" component={} /> */}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
