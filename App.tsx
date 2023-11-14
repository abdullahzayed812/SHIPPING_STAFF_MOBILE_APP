/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
// import type {PropsWithChildren} from 'react';
import { Image, SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { Container } from "./src/components/global/Container";
import { IMAGES } from "./src/utils/images";
import { COLORS } from "./src/utils/colors";
import { SplashScreen } from "./src/screens/SplashScreen";
import { HomeScreen } from "./src/screens/HomeScreen";
import { ScanShipmentScreen } from "./src/screens/ScanShipmentsScreen";
import { ShipmentDetailsScreen } from "./src/screens/ShipmentDetailsScreen";
import { EditShipmentScreen } from "./src/screens/EditShipments";
import { ProfileScreen } from "./src/screens/ProfileScreen";
import { EditProfile } from "./src/screens/EditProfileScreen";
import { ChangePasswordScreen } from "./src/screens/ChangePasswordScreen";
import { Scanner } from "./src/feature/scanner/Scanner";
import { Provider } from "react-redux";
import { store } from "./src/app/store";
import { Button } from "./src/components/global/Button";
import { openScanner } from "./src/feature/scanner/scannerSlice";
import { useAppDispatch } from "./src/app/hooks";

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

function App(): JSX.Element {
  // const dispatch = useAppDispatch();
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={COLORS.MAIN}
      />
      <Provider store={store}>
        <Scanner />
        <Button text="Open" onPress={() => store.dispatch(openScanner())} />
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
