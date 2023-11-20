import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";
import { ShipmentDetailsType } from "../components/shipmentDetails/ShipmentDetails";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BottomTabBarButtonProps, BottomTabScreenProps } from "@react-navigation/bottom-tabs";

export type ScanStackParamList = {
  ScannerScreen: undefined;
  ScanShipmentScreen: undefined;
};

export type ScanStackScreenProps<T extends keyof ScanStackParamList> = CompositeScreenProps<
  NativeStackScreenProps<ScanStackParamList, T>,
  ShipmentStackScreenProps<keyof ShipmentStackParamList>
>;

export type ProfileStackParamList = {
  ProfileScreen: undefined;
  ChangePasswordScreen: undefined;
  EditProfileScreen: undefined;
};

export type ProfileStackScreenProps<T extends keyof ProfileStackParamList> = NativeStackScreenProps<
  ProfileStackParamList,
  T
>;

export type TabStackParamList = {
  HomeScreen: undefined;
  ScanStackScreen: NavigatorScreenParams<ScanStackParamList>;
  ProfileStackScreen: NavigatorScreenParams<ProfileStackParamList>;
};

export type TabStackScreenProps<T extends keyof TabStackParamList> = BottomTabScreenProps<
  TabStackParamList,
  T
>;

export type ShipmentStackParamList = {
  ShipmentDetailsScreen: ShipmentDetailsType;
  EditShipmentScreen: { awb: string };
  SuccessEditScreen: undefined;
};

export type ShipmentStackScreenProps<T extends keyof ShipmentStackParamList> = CompositeScreenProps<
  NativeStackScreenProps<ShipmentStackParamList, T>,
  TabStackScreenProps<keyof TabStackParamList>
>;

export type RootStackParamList = {
  SplashScreen: undefined;
  LoginScreen: undefined;
  TabStackScreen: BottomTabScreenProps<TabStackParamList>;
  ShipmentStackScreen: NavigatorScreenParams<ShipmentStackParamList>;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = CompositeScreenProps<
  NativeStackScreenProps<RootStackParamList, T>,
  TabStackScreenProps<keyof TabStackParamList>
>;
