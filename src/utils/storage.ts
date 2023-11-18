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

export async function loadUserData(): Promise<
  { accessToken: string; userInfo: UserInfo } | undefined
> {
  try {
    const accessToken = await AsyncStorage.getItem("token");
    const userInfo = await AsyncStorage.getItem("userInfo");

    return accessToken && userInfo ? { accessToken, userInfo: JSON.parse(userInfo) } : undefined;
  } catch (error) {
    console.log(error);
  }
}
