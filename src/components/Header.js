import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = (props) => {
  return (
    <View style={styles.navBar}>
      <Text style={styles.title}>Cryptocurrency Tracker</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    title: {
        color: '#fff',
        fontSize: 20,
        marginTop: 30,
        fontWeight: 'bold'
    },
    navBar: {
        height: 80,
        backgroundColor: '#2ba2d3',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Header;
