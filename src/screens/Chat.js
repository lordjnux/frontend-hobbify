import { View, Text, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import React, { Profiler } from "react";
import ChatHeader from "../components/ChatHeader/ChatHeader";
import ChatInput from "../components/ChatInput/ChatInput";
import ChatMessages from "../components/ChatMessages/ChatMessages";

const Chat = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#7E78D2" />
      <ChatHeader />
      <ChatMessages />
      <ChatInput />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1D1E2C",
    flex: 1,
  },
});

export default Chat;
