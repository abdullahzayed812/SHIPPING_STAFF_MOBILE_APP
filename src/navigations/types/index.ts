import { NavigatorScreenParams } from "@react-navigation/native";

export type TabStackParamList = {
  Home: undefined;
  Scan: undefined;
  Profile: undefined;
};

export type HomeStackParamList = {
  HomeScreen: undefined;
  ScanShipmentScreen: undefined;
};

export type RootStackParamList = {
  TabStackScreen: NavigatorScreenParams<TabStackParamList>;
  SplashScreen: undefined;
  LoginScreen: undefined;
};
