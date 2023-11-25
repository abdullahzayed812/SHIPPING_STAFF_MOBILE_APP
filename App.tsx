/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { COLORS } from "./src/utils/colors";
import { Provider } from "react-redux";
import { store } from "./src/app/store";
import { RootStackScreen } from "./src/navigations";
import { NotificationModal } from "./src/feature/notification/NotificationModal";

function App(): JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={COLORS.MAIN} />
      <Provider store={store}>
        <RootStackScreen />
        <NotificationModal />
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
