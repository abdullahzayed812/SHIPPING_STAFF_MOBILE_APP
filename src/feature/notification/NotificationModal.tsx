import { Modal, StyleSheet, Text, View } from "react-native";
import { FONT_MEDIUM_LIGHT_BOLD } from "../../utils/fonts";
import { COLORS } from "../../utils/colors";
import { SPACING } from "../../utils/dimensions";
import { GLOBAL_STYLES } from "../../utils/styles";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  hideNotificationModal,
  selectErrorMessage,
  selectIsActiveNotificationModal,
} from "./notificationSlice";
import { useEffect } from "react";

export function NotificationModal(): JSX.Element {
  const dispatch = useAppDispatch();

  const errorMessage = useAppSelector(selectErrorMessage);
  const isActive = useAppSelector(selectIsActiveNotificationModal);

  useEffect(() => {
    const timerId = setTimeout(() => dispatch(hideNotificationModal()), 2500);
    return () => clearTimeout(timerId);
  });

  return (
    <Modal visible={isActive} transparent animationType="slide">
      <View style={STYLES.container}>
        <Text style={STYLES.errorMessage}>{errorMessage}</Text>
        <Text style={{ fontSize: 30 }}>🙋</Text>
      </View>
    </Modal>
  );
}

const STYLES = StyleSheet.create({
  container: {
    ...GLOBAL_STYLES.SPACE_BETWEEN,
    width: "95%",
    alignSelf: "center",
    position: "absolute",
    bottom: 20,
    borderRadius: SPACING.SMALL / 2,
    padding: SPACING.SMALL / 2,
    backgroundColor: COLORS.MAIN,
    elevation: 10,
  },
  errorMessage: {
    flex: 1,
    ...FONT_MEDIUM_LIGHT_BOLD,
    color: COLORS.WHITE,
    padding: SPACING.SMALL,
    fontSize: 22,
  },
});
