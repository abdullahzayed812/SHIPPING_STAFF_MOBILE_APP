import { Image } from "react-native";
import { Container } from "../components/global/Container";
import { IMAGES } from "../utils/images";
import { useEffect } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigations/types";
import { useAppSelector } from "../app/hooks";
import { selectUserInfo } from "../feature/user/userSlice";
import { loadUserData } from "../utils/storage";

interface SplashScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export function SplashScreen({ navigation }: SplashScreenProps): JSX.Element {
  const startApp = async () => {
    const user = await loadUserData();

    if (user?.userInfo.email) navigation.navigate("TabStackScreen", { screen: "Home" });
    else navigation.navigate("LoginScreen");
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
