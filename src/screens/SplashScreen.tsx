import { Image } from "react-native";
import { Container } from "../components/global/Container";
import { IMAGES } from "../utils/images";
import { useEffect } from "react";
import { useAppDispatch } from "../app/hooks";
import { saveUserData } from "../feature/user/userSlice";
import { loadToken, loadUserData } from "../utils/storage";
import { RootStackScreenProps } from "../navigations/types";

interface SplashScreenProps {
  navigation: RootStackScreenProps<"SplashScreen">["navigation"];
}

export function SplashScreen({ navigation }: SplashScreenProps): JSX.Element {
  const dispatch = useAppDispatch();

  const startApp = async () => {
    try {
      const user = await loadUserData();
      const access_token = await loadToken();

      if (user?.email) {
        dispatch(saveUserData({ access_token, user }));
        navigation.navigate("HomeScreen");
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
