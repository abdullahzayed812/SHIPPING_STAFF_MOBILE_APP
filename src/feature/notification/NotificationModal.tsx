import { Modal, StyleSheet, Text, View } from "react-native";
import { FONT_MEDIUM_LIGHT_BOLD } from "../../utils/fonts";
import { COLORS } from "../../utils/colors";
import { SPACING } from "../../utils/dimensions";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { hideNotificationModal, selectIsActiveNotificationModal } from "./notificationSlice";
import { useEffect } from "react";

interface NotificationModalProps {
  message: string;
}

export function NotificationModal({ message }: NotificationModalProps): JSX.Element {
  const dispatch = useAppDispatch();
  const isActive = useAppSelector(selectIsActiveNotificationModal);

  useEffect(() => {
    const timerId = setTimeout(() => dispatch(hideNotificationModal()), 1500);
    return () => clearTimeout(timerId);
  });

  return (
    <Modal visible={isActive} transparent animationType="slide">
      <View style={STYLES.container}>
        <Text style={STYLES.message}>{message}</Text>
      </View>
    </Modal>
  );
}

const STYLES = StyleSheet.create({
  container: {
    width: "95%",
    alignSelf: "center",
    position: "absolute",
    bottom: 20,
    borderRadius: SPACING.SMALL / 2,
    padding: SPACING.SMALL / 2,
    backgroundColor: COLORS.RED,
    elevation: 10,
  },
  message: { ...FONT_MEDIUM_LIGHT_BOLD, color: COLORS.WHITE },
});
