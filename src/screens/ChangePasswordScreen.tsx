import { Image } from "react-native";
import { Container } from "../components/global/Container";
import { Header } from "../components/global/Header";
import { IMAGES } from "../utils/images";
import { SPACING } from "../utils/dimensions";

export function ChangePasswordScreen(): JSX.Element {
  return (
    <>
      <Header text="Change Password" />
      <Container>
        <Image
          source={IMAGES.CHANGE_PASSWORD}
          style={{ alignSelf: "center", marginVertical: SPACING.SMALL }}
        />
      </Container>
    </>
  );
}
