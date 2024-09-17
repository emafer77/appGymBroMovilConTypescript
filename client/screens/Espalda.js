import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Espalda = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        SELECCIONA EL MUSCULO DE LA LA ESPALDA QUE DESEAS ENTRENAR
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("musculo", { itemID: 1 })}
      >
        <Text style={styles.buttonText}>Dorsal ancho</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("musculo", { itemID: 2 })}
      >
        <Text style={styles.buttonText}>Trapecio</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("musculo", { itemID: 3 })}
      >
        <Text style={styles.buttonText}>Romboides</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#416C7C",
  },
  title: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 35,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: "center",
    padding: 10,
  },
});
export default Espalda;
