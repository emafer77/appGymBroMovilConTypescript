import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tu GymBro</Text>
      <TouchableOpacity>
        <Text style={styles.buttonText}>Crear rutina</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("secciones")}>
        <Text style={styles.buttonText}>Musculos </Text>
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
    fontSize: 35,
    textAlign: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: "center",
    padding: 10,
  },
});

export default HomeScreen;
