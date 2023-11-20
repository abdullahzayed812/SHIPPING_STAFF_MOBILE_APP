import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfileScreen } from "../screens/ProfileScreen";
import { ChangePasswordScreen } from "../screens/ChangePasswordScreen";
import { EditProfileScreen } from "../screens/EditProfileScreen";
import { ProfileStackParamList } from "./types";

const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();

export function ProfileStackScreen(): JSX.Element {
  return (
    <ProfileStack.Navigator initialRouteName="ProfileScreen" screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <ProfileStack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />
      <ProfileStack.Screen name="EditProfileScreen" component={EditProfileScreen} />
    </ProfileStack.Navigator>
  );
}
