import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Brazo = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        SELECCIONA EL MUSCULO DEL BRAZO QUE DESEAS ENTRENAR
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("musculo", { itemID: 10 })}
      >
        <Text style={styles.buttonText}>Bíceps Braquial - Cabeza Corta</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("musculo", { itemID: 11 })}
      >
        <Text style={styles.buttonText}>Bíceps Braquial - Cabeza Larga</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("musculo", { itemID: 12 })}
      >
        <Text style={styles.buttonText}>Tríceps Braquial - Cabeza Larga</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("musculo", { itemID: 13 })}
      >
        <Text style={styles.buttonText}>Tríceps Braquial - Cabeza Lateral</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("musculo", { itemID: 14 })}
      >
        <Text style={styles.buttonText}>Tríceps Braquial - Cabeza Medial</Text>
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
export default Brazo;
