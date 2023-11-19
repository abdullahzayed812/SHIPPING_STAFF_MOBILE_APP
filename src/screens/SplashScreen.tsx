import { Image } from "react-native";
import { Container } from "../components/global/Container";
import { IMAGES } from "../utils/images";
import { useEffect } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigations/types";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { saveUserData, selectUserInfo } from "../feature/user/userSlice";
import { loadToken, loadUserData } from "../utils/storage";

interface SplashScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export function SplashScreen({ navigation }: SplashScreenProps): JSX.Element {
  const dispatch = useAppDispatch();

  const startApp = async () => {
    try {
      const user = await loadUserData();
      const access_token = await loadToken();

      if (user?.email) {
        dispatch(saveUserData({ access_token, user }));
        navigation.navigate("TabStackScreen", { screen: "HomeScreen" });
      } else {
        navigation.navigate("LoginScreen");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const timerId = setTimeout(startApp, 1000);
    return () => clearTimeout(timerId);
  }, []);

  return (
    <Container changeDefaultBg centerContent>
      <Image source={IMAGES.LOGO} style={{ width: 332, height: 166 }} />
    </Container>
  );
}
