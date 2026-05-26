import { StatusBar } from 'react-native';
import { StyleSheet, Text, View, Image, } from 'react-native';
import React from 'react';
import Inicio from './assets/Pages/inicio/Inicio';
import NewUser from './assets/Pages/boasvindas/Newuser';
import { NavigationContainer } from '@react-navigation/native';
import {RootStack, AtividadeDetailsScreen} from './assets/Components/tabnavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App(){

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="Newuser"> 
        <Stack.Screen name="Newuser"
        component={NewUser}
        options={{ headerShown: false }} /> 
        <Stack.Screen name="Home"  
        component={RootStack} 
        options={{ headerShown: false }}/>
        <Stack.Screen name="Login"  
        component={Inicio} 
        options={{ headerShown: false }}/> 
        <Stack.Screen name="detailsAtividade"  
        component={AtividadeDetailsScreen} 
        options={{ headerShown: false }}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
};