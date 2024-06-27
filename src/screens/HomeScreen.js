import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Contador from "../components/Contador";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "black" }}>
        primera screen ejemplo para hobbify
      </Text>
      <Contador />
      <StatusBar style="auto" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
