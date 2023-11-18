import { NavigatorScreenParams } from "@react-navigation/native";

export type TabStackParamList = {
  HomeScreen: undefined;
  ScanStackScreen: NavigatorScreenParams<ScanStackParamList>;
  ProfileScreen: undefined;
};

export type ScanStackParamList = {
  ScannerScreen: undefined;
  ScanShipmentScreen: undefined;
  ShipmentDetailsScreen: { awb: string };
};

export type RootStackParamList = {
  TabStackScreen: NavigatorScreenParams<TabStackParamList>;
  SplashScreen: undefined;
  LoginScreen: undefined;
};
