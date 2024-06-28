import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ChatMessages = () => {
  return (
    <View style={styles.container}>
      <View style={styles.eMsgContainer}>
        <View style={styles.eMessage}>
          <Text style={styles.eMsg}>Hola Mucho gusto en conocerte!</Text>
        </View>
      </View>
      <View style={styles.oMsgContainer}>
        <View style={styles.oMessage}>
          <Text style={styles.oMsg}>El gusto es mio</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  eMessage: {
    backgroundColor: "#A6A2D6",
    maxWidth: 240,
    borderRadius: 5,
    marginTop: 5,
    padding: 3,
    paddingLeft: 3,
    paddingRight: 3,
    marginLeft: 5,
  },
  eMsg: {
    color: "white",
  },
  eMsgContainer: {
    alignSelf: "stretch",
    alignItems: "flex-start",
  },
  oMessage: {
    backgroundColor: "#635BD6",
    maxWidth: 240,
    borderRadius: 5,
    marginTop: 5,
    padding: 3,
    paddingLeft: 3,
    paddingRight: 3,
    marginRight: 5,
  },
  oMsg: {
    color: "white",
  },
  oMsgContainer: {
    alignSelf: "stretch",
    alignItems: "flex-end",
  },
});

export default ChatMessages;
