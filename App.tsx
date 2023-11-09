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

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={COLORS.MAIN}
      />
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
