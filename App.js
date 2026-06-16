import { StatusBar } from 'react-native';
import { StyleSheet, Text, View, Image, } from 'react-native';
import React from 'react';
import Inicio from './assets/Pages/inicio/Inicio';
import NewUser from './assets/Pages/boasvindas/Newuser';
import Home from './assets/Pages/Home/Home'
import PerfilPaciente from './assets/Pages/PerfilPaciente/PerfilPaciente';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="Newuser"> 
        <Stack.Screen name="Newuser"
        component={NewUser}
        options={{ headerShown: false }} /> 
        <Stack.Screen name="Login"  
        component={Inicio} 
        options={{ headerShown: false }}/>
        <Stack.Screen name="Home"  
        component={Home} 
        options={{ headerShown: false }}/>
        <Stack.Screen name="PerfilPaciente"  
        component={PerfilPaciente} 
        options={{ headerShown: false }}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
