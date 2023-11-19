import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserInfo } from "../feature/user/userSlice";

export async function storeUserData(accessToken: string, userInfo: UserInfo): Promise<void> {
  try {
    await AsyncStorage.setItem("token", accessToken);
    await AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
  } catch (e) {
    console.log(e);
  }
}

export async function loadUserData(): Promise<UserInfo | undefined> {
  try {
    const userInfo = await AsyncStorage.getItem("userInfo");
    return userInfo !== null ? JSON.parse(userInfo) : undefined;
  } catch (error) {
    console.log(error);
  }
}

export async function loadToken(): Promise<string | undefined> {
  try {
    const token = await AsyncStorage.getItem("token");
    return token !== null ? token : undefined;
  } catch (error) {
    console.log(error);
  }
}
