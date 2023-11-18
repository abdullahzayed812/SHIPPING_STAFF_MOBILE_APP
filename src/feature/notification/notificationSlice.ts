import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface NotificationState {
  isActive: boolean;
}

const initialState: NotificationState = {
  isActive: false,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showNotificationModal(state) {
      state.isActive = true;
    },
    hideNotificationModal(state) {
      state.isActive = false;
    },
  },
});

export const { showNotificationModal, hideNotificationModal } = notificationSlice.actions;

export const selectIsActiveNotificationModal = (state: RootState) => state.notification.isActive;

export default notificationSlice.reducer;
