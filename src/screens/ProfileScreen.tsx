import { Container } from "../components/global/Container";
import { Header } from "../components/global/Header";
import { Avatar } from "../components/profile/Avatar";
import { ProfileItem } from "../components/profile/ProfileItem";
import { IMAGES } from "../utils/images";

export function ProfileScreen(): JSX.Element {
  return (
    <>
      <Header text="Profile" />
      <Container>
        <Avatar />
        <ProfileItem text="Profile" leftImage={IMAGES.PROFILE} />
        <ProfileItem text="Change Password" leftImage={IMAGES.LOCK} />
        <ProfileItem text="Logout" leftImage={IMAGES.LOGOUT} logout />
      </Container>
    </>
  );
}
