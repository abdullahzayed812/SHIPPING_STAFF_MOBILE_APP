import { NavigatorScreenParams } from "@react-navigation/native";
import { ShipmentDetailsType } from "../../components/shipmentDetails/ShipmentDetails";

export type ScanStackParamList = {
  ScannerScreen: undefined;
  ScanShipmentScreen: undefined;
};

export type ProfileStackParamList = {
  ProfileScreen: undefined;
  ChangePasswordScreen: undefined;
  EditProfileScreen: undefined;
};

export type TabStackParamList = {
  HomeScreen: undefined;
  ScanStackScreen: NavigatorScreenParams<ScanStackParamList>;
  ProfileStackScreen: NavigatorScreenParams<ProfileStackParamList>;
};

export type ShipmentStackParamList = {
  ShipmentDetailsScreen: ShipmentDetailsType;
  EditShipmentScreen: { awb: string };
  SuccessEditScreen: undefined;
};

export type RootStackParamList = {
  SplashScreen: undefined;
  LoginScreen: undefined;
  TabStackScreen: NavigatorScreenParams<TabStackParamList>;
  ShipmentStackScreen: NavigatorScreenParams<ShipmentStackParamList>;
};
