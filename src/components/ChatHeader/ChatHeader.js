import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";

const ChatHeader = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.arrow}>{"<"}</Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity>
            <Image
              style={styles.profile}
              source={require("../../../assets/no-pic.png")}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={{ color: "white", fontSize: 20 }}>... </Text>
        </TouchableOpacity>
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
  profile: {
    width: 40,
    height: 40,
    borderRadius: 999,
  },
});

export default ChatHeader;
