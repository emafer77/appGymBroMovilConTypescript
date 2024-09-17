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
import { Video } from "expo-av";

export default function EjercicioEnCasa({ navigation, route }) {
  const [ejercicios, setEjercicios] = useState([]);
  const { itemID } = route.params;

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(
        `http://192.168.1.67:8080/ejercicios_en_casa/${itemID}`
      );
      const data = await response.json();
      setEjercicios(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {ejercicios.length > 0 ? (
          ejercicios.map((ejercicio, index) => (
            <View key={index} style={styles.ejercicioContainer}>
              <Text style={styles.title}>{ejercicio.nombre}</Text>
              <Text style={styles.description}>{ejercicio.descripcion}</Text>
              <Video
                source={{ uri: ejercicio.video_url }}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay={false}
                isLooping
                style={styles.video}
                useNativeControls
              />
            </View>
          ))
        ) : (
          <Text style={styles.title}>No hay ejercicios disponibles.</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#416C7C",
    paddingTop: 50,
  },
  scrollView: {
    backgroundColor: "#416C7C",
    marginHorizontal: 20,
  },
  title: {
    color: "#D4E4EA",
    fontSize: 24,
    marginBottom: 10,
  },
  description: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  ejercicioContainer: {
    marginBottom: 20,
  },
  video: {
    width: "100%", // Ajusta esto según las necesidades de diseño
    height: 300, // Altura del video
  },
});
