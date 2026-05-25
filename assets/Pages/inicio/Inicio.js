import { StatusBar } from 'react-native';
import {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import Logo from './logo.png';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Login({navigation}){

  return (
      <LinearGradient colors={['#13AAFF', '#3F00C6']} style={styles.container}>
        <View style={styles.form}>
          <View style={styles.conteudo}>
            <Image style={styles.logo} source={Logo}/>
          </View>
          <Text style={styles.entrar}>ENTRAR</Text>
          <Text style={styles.labeltexto}>E-mail:</Text>
          <TextInput 
          style={styles.caixadetexto}
          placeholder="Digite seu e-mail!"
          ></TextInput>

          <Text style={styles.labeltexto}>Senha:</Text>
          <TextInput 
          style={styles.caixadetexto}
          placeholder="Digite sua senha!"
          ></TextInput>

        </View>
            <TouchableOpacity onPress={()=> navigation.navigate('Newuser')}>
                <Text style={styles.labelbotao}>ENTRAR</Text>
                </TouchableOpacity>
            <Text style={styles.senhaesqueceu}>Esqueceu a senha?</Text>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3F00C6',
    color: '#FFFFFF',
  },
  form: {
    width: '90%',
    height: '65%',
    backgroundColor: '#BDCBF6',
    marginBottom: '1%',
    bottom: '3%',
    borderRadius: 38,
    flexDirection: 'colum',

  },
  conteudo: {
    width: '100%',
    height: '20%',
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DEEFFE',
  },
  logo: {
    width: '50%',
    height: '80%',
    zIndex: 2,
    elevation: 2,
  },
  entrar:{
    textAlign: 'center',
    marginTop: '10%',
    fontSize: 30,
    fontWeight: 'bold'
  },
  caixadetexto:{
    width: '75%',
    height: '12%',
    left: '20%',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingLeft: 10,
    fontSize: 17

  },
  labeltexto:{
    top: '12%',
    left: '2%',
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#C4D2F6',
    width: '20%',
    height: '12%',
    paddingTop: '4%',
    borderBottomStartRadius: 12,
    borderTopStartRadius: 12,
    
  },

  labelbotao:{
    fontSize: 23,
    fontWeight: 'bold',
    width: 230,
    height: 60,
    backgroundColor: '#B8C9F5',
    paddingTop: 15,
    paddingLeft: 72,
    borderRadius: 50,
  },
  senhaesqueceu:{
    marginTop: 10,
    color: 'white',
    textDecorationLine: 'underline',

  }
});
