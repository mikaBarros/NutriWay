import React from 'react';
// 1. Removi o SafeAreaView daqui para tirar o aviso de erro
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
// 2. Importei o SafeAreaView do lugar correto
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

export default function NewUser({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* 3. REMOVI AS PALAVRAS 'code' e 'Code' QUE ESTAVAM AQUI E TRAVAVAM O APP */}

      {/* 1. FUNDO VERDE (O ARCO) */}
      <View style={styles.greenArc} />

      {/* 2. LOGO E NOME DA MARCA */}
      <View style={styles.logoContainer}>
        <Image 
          source={require('./logo1.png')} 
          style={styles.logoImage} 
          resizeMode="contain" 
        />
        <Text style={styles.brandName}>RAYANNE SOARES</Text>
      </View>

      {/* 3. CONTEÚDO CENTRAL */}
      <View style={styles.mainContent}>
        
        {/* 4. FOTO DE PERFIL */}
        <View style={styles.circleContainer}>
          <Image 
            source={require('./perfil.png')} 
            style={styles.profileImage} 
            resizeMode="cover"
          />
        </View>

        {/* 5. TEXTOS DA NUTRICIONISTA */}
        <View style={styles.infoContainer}>
          <Text style={styles.title}>NUTRICIONISTA | CRN 46881</Text>
          <Text style={styles.description}>Nutricionista da APAE Esperança-PB</Text>
          <Text style={styles.description}>Atendimento a Domicílio</Text>
        </View>

        {/* 6. BOTÃO FINAL */}
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Login')}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Começar agora</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7DBCA',
  },
  greenArc: {
    position: 'absolute',
    top: -height * 0.35,
    alignSelf: 'center',
    width: width * 2.2,
    height: height * 0.8,
    borderRadius: width * 1.1,
    backgroundColor: '#A9B69B', 
  },
  logoContainer: {
    height: height * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.02,
  },
  logoImage: {
    width: width * 0.6,
    height: height * 0.15,
  },
  brandName: {
    color: '#FFFFFF',
    fontSize: width * 0.06,
    fontWeight: '300',
    letterSpacing: 3,
    fontFamily: 'serif',
    marginTop: -height * 0.02,
  },
  mainContent: {
    flex: 1,
    alignItems: 'center',
  },
  circleContainer: {
    width: width * 0.78,
    height: width * 0.78,
    borderRadius: (width * 0.78) / 2,
    backgroundColor: '#FFF',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.4)',
    overflow: 'hidden',
    marginTop: -height * 0.03,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    marginTop: height * 0.04,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: width * 0.045,
    color: '#105D3F',
    fontWeight: '700',
    marginBottom: 5,
  },
  description: {
    fontSize: width * 0.038,
    color: '#105D3F',
    textAlign: 'center',
    lineHeight: width * 0.06,
  },
  button: {
    backgroundColor: '#91AA86',
    position: 'absolute',
    bottom: height * 0.05, 
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.15,
    borderRadius: 50,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: width * 0.05,
    fontWeight: '500',
    fontFamily: 'serif',
  },
});