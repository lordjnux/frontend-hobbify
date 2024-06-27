import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

const MessagesHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <TouchableOpacity>
          <Text style={styles.arrow}>{"<"}</Text>
        </TouchableOpacity>
        <Text>ACA VA UN BUSCADOR</Text>
        <View></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#7E78D2",
    height: 70,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  mainContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
  },
  arrow: {
    color: "white",
    fontSize: 40,
  },
});

export default MessagesHeader;
