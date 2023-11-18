import { StyleSheet, View } from "react-native";
import { Input } from "../global/Input";
import { COLORS } from "../../utils/colors";
import { SPACING } from "../../utils/dimensions";
import { Button } from "../global/Button";
import { useState } from "react";
import {
  VALID_EMAIL,
  VALID_PASSWORD,
  displayError,
  isInputsFilled,
  isValidInputValue,
} from "../../utils/validation";
import { useAppDispatch } from "../../app/hooks";
import { NotificationModal } from "../../feature/notification/NotificationModal";
import { showNotificationModal } from "../../feature/notification/notificationSlice";
import { ApiManager } from "../../api/apiManager";
import { Loading } from "../global/Loading";
import { saveUserData } from "../../feature/user/userSlice";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigations/types";
import { storeUserData } from "../../utils/storage";

interface FormInputType {
  email: string;
  password: string;
}

export function LoginForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [formInputs, setFormInputs] = useState<FormInputType>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const { email, password } = formInputs;

  const handleInputChange = (text: string, inputName: string) => {
    setFormInputs({ ...formInputs, [inputName]: text });
  };

  const handleLogin = async () => {
    if (!isInputsFilled({ email, password })) {
      displayError(setError, "Inputs must be filled!");
      return;
    } else if (!isValidInputValue(email, VALID_EMAIL)) {
      displayError(setError, "Invalid Email!");
      return;
    } else if (!isValidInputValue(password, VALID_PASSWORD)) {
      displayError(setError, "At least one upper, lower and digit");
      return;
    }

    try {
      setLoading(true);

      const { access_token, user } = await ApiManager.login<FormInputType>({ email, password });

      if (user.id) {
        await storeUserData(access_token, user);
        dispatch(saveUserData({ access_token, user }));
        navigation.navigate("TabStackScreen", { screen: "Home" });
      } else {
        displayError(setError, "User not found.");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={STYLES.container}>
      <Input
        placeholder="Email"
        inputContainerStyle={STYLES.input}
        handleChange={(text: string) => handleInputChange(text, "email")}
      />
      <Input
        secureTextEntry
        placeholder="Password"
        inputContainerStyle={STYLES.input}
        handleChange={(text: string) => handleInputChange(text, "password")}
      />
      <Button
        text="Login"
        onPress={handleLogin}
        containerStyle={STYLES.button}
        color={COLORS.WHITE}
      />
      {loading ? <Loading /> : null}
      {error ? <NotificationModal message={error} /> : null}
    </View>
  );
}

const STYLES = StyleSheet.create({
  container: {
    marginTop: SPACING.LARGE * 2,
  },
  input: { marginBottom: SPACING.SMALL, backgroundColor: COLORS.LIGHT_GRAY },
  button: {
    marginTop: SPACING.MEDIUM,
    backgroundColor: COLORS.DARK_MAIN,
  },
});
