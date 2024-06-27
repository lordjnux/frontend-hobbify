import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import NavBar from "../components/NavBar/NavBar";
import MessagesHeader from "../components/MessagesHeader/MessagesHeader";
const h1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const userExamplle = {
  name: "Pedrito Fulano",
  img: require("../../assets/no-pic.png"),
  hobbies: ["Boxeo", "Motocross", "Tejer"],
  message: "hola, mucho gusto en conocerte!",
};
const Messages = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#7E78D2" />
      <MessagesHeader />
      <View style={styles.mainContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {h1.map((numbb, index) => (
            <TouchableOpacity key={index}>
              <View style={styles.card}>
                <View style={styles.mainCard}>
                  <View style={{ margin: 5 }}>
                    <Image
                      source={userExamplle.img}
                      style={styles.profileImg}
                    />
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.nameText}>{userExamplle.name}</Text>
                    <Text style={styles.messageText}>
                      {userExamplle.message}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1D1E2C",
    flex: 1,
  },
  mainContainer: {
    flex: 1,
  },
  card: {
    height: 90,
    alignSelf: "stretch",
    borderRadius: 15,
    marginLeft: 15,
    marginRight: 15,
  },
  profileImg: {
    height: 75,
    width: 75,
    borderRadius: 999,
  },
  nameText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  messageText: {
    color: "white",
    fontSize: 16,
  },
  mainCard: {
    felx: 1,
    flexDirection: "row",
  },
  textContainer: {
    margin: 10,
  },
});

export default Messages;
