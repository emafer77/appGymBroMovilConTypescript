import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens

import HomeScreen from "./screens/HomeScreen";
import SettingScreen from "./screens/SettingScreens";

import Musculo1 from "./screens/musculo1";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Espalda from "./screens/Espalda";
import Secciones from "./screens/Secciones";
import Ejercicio from "./screens/ejercicio";
import Pectoral from "./screens/Pectoral";
import Hombro from "./screens/Hombro";
import Brazo from "./screens/Brazo";
import Antebrazo from "./screens/Antebrazo";
import Abdominales from "./screens/Abdominales";
import Pierna from "./screens/Pierna";
import Gluteo from "./screens/Gluteo";
import Pantorrilla from "./screens/Pantorrillas";
import EjercicioEnCasa from "./screens/ejercicioEnCasa";

const Stack = createNativeStackNavigator();

function StackGroup() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="secciones"
        component={Secciones}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Espalda" component={Espalda} />
      <Stack.Screen name="Pectoral" component={Pectoral} />
      <Stack.Screen name="Hombro" component={Hombro} />
      <Stack.Screen name="Brazo" component={Brazo} />
      <Stack.Screen name="Antebrazo" component={Antebrazo} />
      <Stack.Screen name="Abdominales" component={Abdominales} />
      <Stack.Screen name="Pierna" component={Pierna} />
      <Stack.Screen name="Gluteo" component={Gluteo} />
      <Stack.Screen name="Pantorrilla" component={Pantorrilla} />
      <Stack.Screen name="musculo" component={Musculo1} />
      <Stack.Screen name="ejercicio" component={Ejercicio} />
      <Stack.Screen name="EjercicioEnCasa" component={EjercicioEnCasa} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "red",
      }}
    >
      <Tab.Screen
        name="Home"
        component={StackGroup}
        options={{
          tabBarLabel: "Feed",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),

          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarLabel: "Feed",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="brightness-5"
              color={color}
              size={size}
            />
          ),

          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
