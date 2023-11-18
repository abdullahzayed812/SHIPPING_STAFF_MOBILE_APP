import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface UserInfo {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

interface UserState {
  accessToken: string;
  userInfo: UserInfo | undefined;
}

const initialState: UserState = {
  accessToken: "",
  userInfo: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUserData(state, actions) {
      state.accessToken = actions.payload.access_token;
      state.userInfo = actions.payload.user;
    },
    removeUserData(state) {
      state.accessToken = "";
      state.userInfo = undefined;
    },
  },
});

export const { saveUserData, removeUserData } = userSlice.actions;

export const selectAccessToken = (state: RootState) => state.user.accessToken;
export const selectUserInfo = (state: RootState) => state.user.userInfo;

export default userSlice.reducer;
