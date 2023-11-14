import { configureStore } from "@reduxjs/toolkit";
import scannerReducer from "../feature/scanner/scannerSlice";

export const store = configureStore({
  reducer: {
    scanner: scannerReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
