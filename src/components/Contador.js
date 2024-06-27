import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState(0);
  const handleTouch = () => {
    const number1 = contador + 1;
    setContador(number1);
  };
  return (
    <View style={{ alignItems: "center" }}>
      <Text>cantidad de chats fff</Text>
      <TouchableOpacity
        style={{
          backgroundColor: "black",
          alignItems: "center",
        }}
        onPress={() => handleTouch()}
      >
        <Text style={styles.boton}>+</Text>
      </TouchableOpacity>

      <Text>{contador}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  boton: {
    color: "white",
    fontSize: 24,
    width: 30,
    borderRadius: 9999,
  },
});
export default Contador;
