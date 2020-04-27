import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header";
import { Provider } from "react-redux";
import CryptoContainer from './src/components/CryptoContainer';

import Store from "./src/Store";

export default function App() {
  return (
    <Provider store={Store}>
      <View style={styles.container}>
        <Header />
        <CryptoContainer />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
