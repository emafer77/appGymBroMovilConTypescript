import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Pierna = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        SELECCIONA EL MUSCULO DE LA PIERNA QUE DESEAS ENTRENAR
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("musculo", { itemID: 23 })}
      >
        <Text style={styles.buttonText}>Cuádriceps - Recto Femoral</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("musculo", { itemID: 24 })}
      >
        <Text style={styles.buttonText}>Cuádriceps - Vasto externo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("musculo", { itemID: 25 })}
      >
        <Text style={styles.buttonText}>Cuádriceps - Vasto interno</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("musculo", { itemID: 26 })}
      >
        <Text style={styles.buttonText}>aductores</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("musculo", { itemID: 27 })}
      >
        <Text style={styles.buttonText}>Bíceps Femoral</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("musculo", { itemID: 28 })}
      >
        <Text style={styles.buttonText}>Semitendinoso</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("musculo", { itemID: 29 })}
      >
        <Text style={styles.buttonText}>Semimembranoso</Text>
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
export default Pierna;
