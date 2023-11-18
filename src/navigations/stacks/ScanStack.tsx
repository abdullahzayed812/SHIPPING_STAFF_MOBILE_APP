import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScanShipmentScreen } from "../../screens/ScanShipmentsScreen";
import { ShipmentDetailsScreen } from "../../screens/ShipmentDetailsScreen";
import { Scanner } from "../../feature/scanner/Scanner";
import { ScanStackParamList } from "../types";

const ScanStack = createNativeStackNavigator<ScanStackParamList>();

export function ScanShipmentStackScreen(): JSX.Element {
  return (
    <ScanStack.Navigator>
      <ScanStack.Screen name="ScannerScreen" component={Scanner} />
      <ScanStack.Screen name="ScanShipmentScreen" component={ScanShipmentScreen} />
      <ScanStack.Screen name="ShipmentDetailsScreen" component={ShipmentDetailsScreen} />
    </ScanStack.Navigator>
  );
}
