import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Secciones = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        SELECCIONA LA PARTE DEL CUERPO QUE QUIERES ENTRENAR
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("Espalda")}>
        <Text style={styles.buttonText}>Espalda</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Pectoral")}>
        <Text style={styles.buttonText}>Pectoral</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Hombro")}>
        <Text style={styles.buttonText}>Hombro</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Brazo")}>
        <Text style={styles.buttonText}>Brazo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Antebrazo")}>
        <Text style={styles.buttonText}>Antebrazo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Abdominales")}>
        <Text style={styles.buttonText}>Abdominales</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Pierna")}>
        <Text style={styles.buttonText}>Pierna</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Gluteo")}>
        <Text style={styles.buttonText}>Glúteo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Pantorrilla")}>
        <Text style={styles.buttonText}>Pantorrilla</Text>
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

export default Secciones;
