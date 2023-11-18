/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { Image, SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { COLORS } from "./src/utils/colors";
import { Provider } from "react-redux";
import { store } from "./src/app/store";
import { RootStackScreen } from "./src/navigations";

function App(): JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={COLORS.MAIN} />
      <Provider store={store}>
        <RootStackScreen />
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
