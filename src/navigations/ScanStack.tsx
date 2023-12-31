import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScanShipmentScreen } from "../screens/ScanShipmentsScreen";
import { ScannerScreen } from "../feature/scanner/Scanner";
import { ScanStackParamList } from "./types";

const ScanStack = createNativeStackNavigator<ScanStackParamList>();

export function ScanShipmentStackScreen(): JSX.Element {
  return (
    <ScanStack.Navigator initialRouteName="ScannerScreen" screenOptions={{ headerShown: false }}>
      <ScanStack.Screen name="ScannerScreen" component={ScannerScreen} />
      <ScanStack.Screen name="ScanShipmentScreen" component={ScanShipmentScreen} />
    </ScanStack.Navigator>
  );
}
