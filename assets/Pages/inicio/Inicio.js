import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
// Importação correta para não dar o aviso (WARN)
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

export default function Login({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

      <View style={styles.topSection}>
        <View style={[styles.circleLine, { width: 120, height: 120, top: -30, left: -30 }]} />
        <View style={[styles.circleLine, { width: 180, height: 180, top: -50, left: -50 }]} />
        <View style={styles.bigCircleRight} />

        <SafeAreaView edges={['top']} style={styles.safeAreaTop}>
          <TouchableOpacity onPress={() => navigation?.goBack()}>
            <Ionicons name="chevron-back" size={35} color="white" />
          </TouchableOpacity>

          <View style={styles.welcomeBox}>
            <Text style={styles.welcomeTitle}>RAY, SEJA BEM VINDA!</Text>
            <Text style={styles.welcomeSub}>| Faça login com sua conta já cadastrada</Text>
          </View>
        </SafeAreaView>
      </View>

      <View style={styles.bottomSection}>
        <Text style={styles.entrarTitle}>Entrar</Text>

        <View style={styles.form}>
          <View style={styles.inputBox}>
            <Ionicons name="person-outline" size={20} color="#888" style={{marginRight: 10}} />
            <TextInput 
              placeholder="Nome ou email" 
              placeholderTextColor="#A0A0A0"
              style={styles.input} 
            />
          </View>

          <View style={styles.inputBox}>
            <Ionicons name="lock-closed-outline" size={20} color="#888" style={{marginRight: 10}} />
            <TextInput 
              placeholder="Senha" 
              placeholderTextColor="#A0A0A0"
              secureTextEntry={!showPassword} 
              style={styles.input} 
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={20} color="#888" />
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity style={styles.checkRow} onPress={() => setRememberMe(!rememberMe)}>
              <View style={[styles.check, rememberMe && {backgroundColor: '#91AA86'}]} />
              <Text style={styles.optText}>salvar login</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.optText}>esqueceu a senha?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#E7DBCA' 
  },
  topSection: { 
    height: height * 0.45, 
    backgroundColor: '#A9B69B', 
    overflow: 'hidden' 
  },
  safeAreaTop: {
    paddingHorizontal: 25,
    marginTop: 10
  },
  circleLine: { 
    position: 'absolute', 
    borderRadius: 100, 
    borderWidth: 1, 
    borderColor: 'rgba(255,255,255,0.2)' 
  },
  bigCircleRight: { 
    position: 'absolute', 
    right: -width * 0.25, 
    bottom: -height * 0.05, 
    width: width * 0.7, 
    height: width * 0.7, 
    borderRadius: 200, 
    borderWidth: 25, 
    borderColor: 'rgba(145, 160, 130, 0.4)' 
  },
  welcomeBox: { 
    marginTop: 40 
  },
  welcomeTitle: { 
    fontSize: width * 0.1, 
    color: '#FFF', 
    fontWeight: 'bold', 
    fontFamily: 'serif' 
  },
  welcomeSub: { 
    fontSize: 16, 
    color: '#344E2B', 
    fontWeight: 'bold', 
    marginTop: 5 
  },
  bottomSection: { 
    flex: 1, 
    alignItems: 'center', 
    paddingTop: 30 
  },
  entrarTitle: { 
    fontSize: 60, 
    color: '#A9B69B', 
    fontFamily: 'serif', 
    marginBottom: 20 
  },
  form: { 
    width: '85%' 
  },
  inputBox: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    borderWidth: 1.5, 
    borderColor: '#777', 
    borderRadius: 30, 
    height: 55, 
    paddingHorizontal: 15, 
    marginBottom: 15 
  },
  input: { 
    flex: 1, 
    fontSize: 16,
    color: '#333'
  },
  row: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 35 
  },
  checkRow: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  check: { 
    width: 18, 
    height: 18, 
    borderWidth: 1.5, 
    borderColor: '#777', 
    marginRight: 8 
  },
  optText: { 
    fontSize: 14, 
    color: '#444'
  },
  btn: { 
    backgroundColor: '#91AA86', 
    alignSelf: 'center', 
    paddingVertical: 12, 
    paddingHorizontal: 65, 
    borderRadius: 35 
  },
  btnText: { 
    color: '#FFF', 
    fontSize: 32, 
    fontFamily: 'serif' 
  },
});