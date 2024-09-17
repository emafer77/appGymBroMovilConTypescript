import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

export default function Musculo1({ navigation, route }) {
  const [musculos, setMusculos] = useState([]);
  const { itemID } = route.params;

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(
        `http://192.168.1.67:8080/musculos/${itemID}`
      );
      const data = await response.json();
      setMusculos(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>{musculos.nombre}</Text>
        <Text style={styles.description}>{musculos.descripcion}</Text>

        <Image
          source={{
            uri: musculos.imagen,
          }} // Asegúrate de reemplazar esto con la URL de tu imagen
          style={styles.image}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("ejercicio", { itemID: itemID })}
        >
          <Text style={styles.ver}>Ver ejercicios </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("EjercicioEnCasa", { itemID: itemID })
          }
        >
          <Text style={styles.ver}>Ver ejercicios en casa </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#416C7C",
    color: "#fff",
    paddingTop: 50,
  },
  scrollView: {
    backgroundColor: "#416C7C",
    marginHorizontal: 20,
  },
  title: {
    color: "#D4E4EA",
    fontSize: 30,
  },
  image: {
    width: 300, // Ancho de la imagen
    height: 350, // Altura de la imagen
    resizeMode: "cover", // Esto asegura que la imagen se escale adecuadamente
    marginVertical: 20, // Espacio vertical alrededor de la imagen
  },
  description: {
    color: "#FFFFFF",
    fontSize: 18,
    paddingBottom: 10,
  },
  ver: {
    color: "#FFFFFF",
    fontSize: 25,
    paddingBottom: 10,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
