import { Image } from "react-native";
import { Container } from "../components/global/Container";
import { IMAGES } from "../utils/images";
import { LoginForm } from "../components/login/LoginForm";

export function LoginScreen(): JSX.Element {
  return (
    <Container changeDefaultBg>
      <Image source={IMAGES.LOGO} />
      <LoginForm />
    </Container>
  );
}
