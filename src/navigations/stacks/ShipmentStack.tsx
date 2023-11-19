import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ShipmentDetailsScreen } from "../../screens/ShipmentDetailsScreen";
import { EditShipmentScreen } from "../../screens/EditShipments";
import { ShipmentStackParamList } from "../types";
import { SuccessEditScreen } from "../../screens/SuccessEditScreen";

const ShipmentStack = createNativeStackNavigator<ShipmentStackParamList>();

export function ShipmentStackScreen(): JSX.Element {
  return (
    <ShipmentStack.Navigator
      initialRouteName="ShipmentDetailsScreen"
      screenOptions={{ headerShown: false }}>
      <ShipmentStack.Screen name="ShipmentDetailsScreen" component={ShipmentDetailsScreen} />
      <ShipmentStack.Screen name="EditShipmentScreen" component={EditShipmentScreen} />
      <ShipmentStack.Screen name="SuccessEditScreen" component={SuccessEditScreen} />
    </ShipmentStack.Navigator>
  );
}
