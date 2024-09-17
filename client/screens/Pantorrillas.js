import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Pantorrilla = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        SELECCIONA EL MUSCULO DE LA PANTORRILLA QUE DESEAS ENTRENAR
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("musculo", { itemID: 32 })}
      >
        <Text style={styles.buttonText}>Gemelo interno</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("musculo", { itemID: 33 })}
      >
        <Text style={styles.buttonText}>Gemelo Externo</Text>
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
export default Pantorrilla;
