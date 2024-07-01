import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
const user = {
  img: require("../../assets/user-test.jpeg"),
  name: "pedrito1",
};
const hh = {
  a1: "1",
  a2: "2",
  a3: "3",
  a4: "4",
  a5: "5",
  a6: "6",
  a7: "7",
  a8: "8",
  a9: "9",
  a10: "10",
};
const h1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const users = [
  {
    name: "Juan Pérez",
    img: require("../../assets/no-pic10.png"),
    hobbies: ["Leer", "Correr", "Viajar"],
  },
  {
    name: "Ana Gómez",
    img: require("../../assets/no-pic2.png"),
    hobbies: ["Cocinar", "Pintar", "Yoga"],
  },
  {
    name: "Luis Martínez",
    img: require("../../assets/no-pic3.png"),
    hobbies: ["Fútbol", "Videojuegos", "Fotografía"],
  },
  {
    name: "María Rodríguez",
    img: require("../../assets/no-pic15.png"),
    hobbies: ["Bailar", "Escribir", "Cine"],
  },
  {
    name: "Sana Minatozaki",
    img: require("../../assets/no-pic13.png"),
    hobbies: ["Bicicletas", "Leer", "Escalar"],
  },
  {
    name: "Lucía López",
    img: require("../../assets/no-pic5.png"),
    hobbies: ["Jardinería", "Natación", "Costura"],
  },
  {
    name: "Jorge Díaz",
    img: require("../../assets/no-pic1.png"),
    hobbies: ["Tocar la guitarra", "Leer", "Correr"],
  },
  {
    name: "Sofía Morales",
    img: require("../../assets/no-pic8.png"),
    hobbies: ["Fotografía", "Yoga", "Cocina"],
  },
  {
    name: "Miguel Torres",
    img: require("../../assets/no-pic9.png"),
    hobbies: ["Ciclismo", "Viajar", "Escribir"],
  },
  {
    name: "Elena Ramírez",
    img: require("../../assets/no-pic7.png"),
    hobbies: ["Pintar", "Cine", "Jardinería"],
  },
  {
    name: "Roberto Fernández",
    img: require("../../assets/no-pic11.png"),
    hobbies: ["Motocross", "Pesca", "Guitarra"],
  },
  {
    name: "Patricia Vargas",
    img: require("../../assets/no-pic12.png"),
    hobbies: ["Tejer", "Natación", "Leer"],
  },
  {
    name: "Alberto Ruiz",
    img: require("../../assets/no-pic6.png"),
    hobbies: ["Escalar", "Videojuegos", "Fotografía"],
  },
  {
    name: "Natanael Romero",
    img: require("../../assets/no-pic14.png"),
    hobbies: ["Bailar", "Escribir", "Cocinar"],
  },
  {
    name: "Daniel Herrera",
    img: require("../../assets/no-pic4.png"),
    hobbies: ["Fútbol", "Ciclismo", "Viajar"],
  },
];
const MainFeed = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#7E78D2" />
      <Header user={user} navigation={navigation} />
      <View style={styles.mainContainer}>
        <View style={{ margin: 10 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {users.map((userExamplle, index) => (
              <View key={index} style={styles.card}>
                <View style={styles.cardMain}>
                  <View style={{ margin: 5 }}>
                    <TouchableOpacity>
                      <Image
                        source={userExamplle.img}
                        style={styles.profileImg}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.cardText}>
                    <TouchableOpacity>
                      <Text style={styles.nameInCard}>
                        {userExamplle.name}{" "}
                      </Text>
                    </TouchableOpacity>
                    <View style={styles.hobbiesContainer}>
                      {userExamplle.hobbies.map((hobby, index) => (
                        <TouchableOpacity key={index} style={styles.hobbyCard}>
                          <Text style={styles.hobbiesInCard}>{hobby}</Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  </View>
                  <TouchableOpacity style={styles.imageContainer}>
                    <Image
                      source={require("../../assets/send-message.png")}
                      style={styles.sendMessage}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
      <NavBar navigation={navigation} />
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
    backgroundColor: "#FEF9EF",
    marginBottom: 5,
    borderRadius: 15,
  },
  profileImg: {
    height: 80,
    width: 80,
    borderRadius: 999,
  },
  cardMain: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  hobbiesContainer: {
    flexDirection: "row",
  },
  sendMessage: {
    width: 60,
    height: 60,
    tintColor: "#808080",
  },
  imageContainer: {
    margin: 10,
    borderRadius: 9999,
  },
  cardText: {
    marginTop: 10,
    marginBottom: 10,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  nameInCard: {
    fontSize: 18,
    color: "#808080",
    fontWeight: "bold",
  },
  hobbiesInCard: {
    fontSize: 12,
    margin: 5,
    color: "white",
  },
  hobbyCard: {
    padding: 0.5,
    backgroundColor: "#7E78D2",
    margin: 1,
    borderRadius: 4,
  },
});

export default MainFeed;
