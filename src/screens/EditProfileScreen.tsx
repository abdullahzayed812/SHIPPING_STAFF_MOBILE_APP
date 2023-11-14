import { ChangePhoto } from "../components/editProfile/ChangePhoto";
import { EditProfileInputs } from "../components/editProfile/EditProfileInputs";
import { Button } from "../components/global/Button";
import { Container } from "../components/global/Container";
import { Header } from "../components/global/Header";
import { Avatar } from "../components/profile/Avatar";
import { ProfileItem } from "../components/profile/ProfileItem";
import { IMAGES } from "../utils/images";

export function EditProfile(): JSX.Element {
  return (
    <>
      <Header text="Profile" />
      <Container>
        <Avatar />
        <ChangePhoto />
        <EditProfileInputs />
      </Container>
    </>
  );
}
