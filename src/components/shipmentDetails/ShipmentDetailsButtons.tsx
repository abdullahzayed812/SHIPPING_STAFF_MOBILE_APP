import { StyleSheet, View } from "react-native";
import { Button } from "../global/Button";
import { GLOBAL_STYLES } from "../../utils/styles";
import { SPACING } from "../../utils/dimensions";
import { COLORS } from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";
import { ShipmentStackScreenProps } from "../../navigations/types";
import { useAppDispatch } from "../../app/hooks";
import { showNotificationModal } from "../../feature/notification/notificationSlice";

interface ShipmentDetailsButtonsProps {
  awb: string | undefined;
  serviceId: number | undefined;
}

export function ShipmentDetailsButtons({
  awb,
  serviceId,
}: ShipmentDetailsButtonsProps): JSX.Element {
  const dispatch = useAppDispatch();

  const navigation =
    useNavigation<ShipmentStackScreenProps<"ShipmentDetailsScreen">["navigation"]>();

  const handleAppendToDrs = () => {
    navigation.navigate("AppendToDrsScreen", { awb });

    // if (serviceId === 6) {
    //   dispatch(showNotificationModal("Blocked...!"));
    // } else {
    //   navigation.navigate("AppendToDrsScreen", { awb });
    // }
  };

  return (
    <View style={STYLES.container}>
      <Button
        text="Append To DRS"
        onPress={handleAppendToDrs}
        containerStyle={STYLES.buttonStyle1}
        color={COLORS.WHITE}
      />
      <Button
        text="Update Status"
        onPress={() => navigation.navigate("UpdateShipmentStatusScreen", { awb })}
        containerStyle={STYLES.buttonStyle2}
        color={COLORS.WHITE}
      />
    </View>
  );
}

const STYLES = StyleSheet.create({
  container: GLOBAL_STYLES.DIRECTION_ROW,
  buttonStyle1: {
    borderRadius: 0,
    flex: 1,
    borderBottomLeftRadius: SPACING.SMALL,
  },
  buttonStyle2: {
    flex: 1,
    borderRadius: 0,
    borderBottomRightRadius: SPACING.SMALL,
    backgroundColor: COLORS.SECONDARY,
  },
});
