import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface NotificationState {
  isActive: boolean;
  errorMsg: string;
}

const initialState: NotificationState = {
  isActive: false,
  errorMsg: "",
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showNotificationModal(state, actions) {
      state.isActive = true;
      state.errorMsg = actions.payload;
    },
    hideNotificationModal(state) {
      state.isActive = false;
      state.errorMsg = "";
    },
  },
});

export const { showNotificationModal, hideNotificationModal } = notificationSlice.actions;

export const selectIsActiveNotificationModal = (state: RootState) => state.notification.isActive;
export const selectErrorMessage = (state: RootState) => state.notification.errorMsg;

export default notificationSlice.reducer;
