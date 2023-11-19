import { ChangePhoto } from "../components/editProfile/ChangePhoto";
import { EditProfileInputs } from "../components/editProfile/EditProfileInputs";
import { Container } from "../components/global/Container";
import { Header } from "../components/global/Header";
import { Avatar } from "../components/profile/Avatar";

export function EditProfileScreen(): JSX.Element {
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
