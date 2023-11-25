import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";
import { ShipmentDetailsType } from "../components/shipmentDetails/ShipmentDetails";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

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

export type TabStackScreenProps<T extends keyof TabStackParamList> = NativeStackScreenProps<
  TabStackParamList,
  T
>;

export type ShipmentStackParamList = {
  ShipmentDetailsScreen: ShipmentDetailsType;
  EditShipmentScreen: { awb: string };
  SuccessEditScreen: undefined;
  AppendToDrsScreen: { awb: string | undefined };
  UpdateShipmentStatusScreen: { awb: string | undefined };
};

export type ShipmentStackScreenProps<T extends keyof ShipmentStackParamList> = CompositeScreenProps<
  NativeStackScreenProps<ShipmentStackParamList, T>,
  TabStackScreenProps<keyof TabStackParamList>
>;

export type RootStackParamList = {
  SplashScreen: undefined;
  LoginScreen: undefined;
  TabStackScreen: NavigatorScreenParams<TabStackParamList>;
  ShipmentStackScreen: NavigatorScreenParams<ShipmentStackParamList>;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = CompositeScreenProps<
  NativeStackScreenProps<RootStackParamList, T>,
  TabStackScreenProps<keyof TabStackParamList>
>;
