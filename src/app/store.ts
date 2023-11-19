import { configureStore } from "@reduxjs/toolkit";
import scannerReducer from "../feature/scanner/scannerSlice";
import userReducer from "../feature/user/userSlice";
import notificationReducer from "../feature/notification/notificationSlice";
import shipmentReducer from "../feature/shipment/shipmentSlice";

export const store = configureStore({
  reducer: {
    scanner: scannerReducer,
    user: userReducer,
    notification: notificationReducer,
    shipment: shipmentReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
