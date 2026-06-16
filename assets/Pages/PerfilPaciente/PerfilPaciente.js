import React from 'react';
import { 
  StyleSheet, Text, View, Image, TouchableOpacity, 
  ScrollView, TextInput, Dimensions, StatusBar 
} from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

export default function PerfilPaciente({ route, navigation }) {
  // Pegando os dados do paciente passados pela navegação (opcional)
  const { paciente } = route.params || {};

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      
      {/* HEADER VERDE */}
      <View style={styles.header}>
        <SafeAreaView edges={['top']} style={styles.headerContent}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={width * 0.08} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Perfil do Paciente</Text>
          <View style={{ width: width * 0.08 }} /> 
        </SafeAreaView>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* CARD DO PACIENTE */}
        <View style={styles.profileCard}>
          <Image 
            source={paciente?.foto || require('../boasvindas/perfil.png')} 
            style={styles.patientAvatar} 
          />
          <View style={styles.patientInfoText}>
            <Text style={styles.patientName}>{paciente?.nome || 'Mikaela Barros Cunha'}</Text>
            <View style={styles.birthdayRow}>
              <MaterialCommunityIcons name="cake-variant" size={16} color="#555" />
              <Text style={styles.birthdayText}> 12 de jun. de 2003</Text>
            </View>
          </View>
        </View>

        {/* TABS (Informações / Medições) */}
        <View style={styles.tabContainer}>
          <TouchableOpacity style={[styles.tabButton, styles.tabActive]}>
            <Ionicons name="person-outline" size={18} color="#4A5D45" />
            <Text style={styles.tabTextActive}>Informações</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButton}>
            <MaterialCommunityIcons name="ruler" size={18} color="#555" />
            <Text style={styles.tabText}>medições</Text>
          </TouchableOpacity>
        </View>

        {/* SUB-MENU (Botões cinzas) */}
        <View style={styles.subMenu}>
          <TouchableOpacity style={styles.subBtnActive}>
            <Text style={styles.subBtnTextActive}>Informação de consulta</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.subBtn}>
            <Text style={styles.subBtnText}>Informação do paciente</Text>
          </TouchableOpacity>
        </View>

        {/* SEÇÃO: INFORMAÇÕES DE CONSULTA */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Ionicons name="mail-outline" size={24} color="#4A5D45" />
            <Text style={styles.sectionTitle}>Informações de consulta</Text>
          </View>

          <View style={styles.inputGroupRow}>
            <View style={{ flex: 1.5, marginRight: 10 }}>
              <Text style={styles.label}>Motivação</Text>
              <TextInput style={styles.inputSmall} placeholder="Escreva aqui..." />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.label}>Expectativas</Text>
              <TextInput style={styles.inputSmall} placeholder="Escreva aqui..." />
            </View>
          </View>

          <Text style={styles.label}>Objetivos clínicos</Text>
          <TextInput style={styles.inputSmall} placeholder="Nenhum..." />
          <TextInput style={styles.inputSmall} placeholder="Escreva aqui..." />

          <Text style={styles.label}>Outras informações da consulta</Text>
          <TextInput style={styles.inputSmall} placeholder="Escreva aqui..." />
        </View>

        {/* SEÇÃO: HISTÓRIA PESSOAL E SOCIAL */}
        <View style={[styles.sectionContainer, { marginBottom: 100 }]}>
          <View style={styles.sectionHeader}>
            <Ionicons name="happy-outline" size={24} color="#4A5D45" />
            <Text style={styles.sectionTitle}>História pessoal e social</Text>
          </View>

          <Text style={styles.label}>Função intestinal</Text>
          <TextInput style={styles.inputSmall} placeholder="Selecione uma opção" />
          <TextInput style={styles.inputSmall} placeholder="Escreva aqui..." />

          <Text style={styles.label}>Fumante</Text>
          <View style={styles.rowButtons}>
            <TouchableOpacity style={styles.optionBtn}>
               <Text style={styles.optionBtnText}>Sim</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.optionBtn, { backgroundColor: '#A9B69B' }]}>
               <Text style={styles.optionBtnText}>Não</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>

      {/* TAB BAR INFERIOR (Copie o mesmo estilo do Inicio.js) */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home-outline" size={width * 0.07} color="white" />
          <Text style={styles.tabBarText}>início</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="people-outline" size={width * 0.07} color="#4A5D45" />
          <Text style={[styles.tabBarText, {color: '#4A5D45'}]}>Pacientes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <MaterialCommunityIcons name="chart-timeline-variant" size={width * 0.07} color="white" />
          <Text style={styles.tabBarText}>Progresso</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="person-outline" size={width * 0.07} color="white" />
          <Text style={styles.tabBarText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#E7DBCA' },
  header: { backgroundColor: '#A9B69B', paddingBottom: 15 },
  headerContent: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 15 
  },
  headerTitle: { color: 'white', fontSize: width * 0.06, fontWeight: '300', fontFamily: 'serif' },
  scrollContent: { padding: 15 },
  
  profileCard: {
    backgroundColor: '#F3E9DC',
    borderRadius: 25,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D1C4B2',
    elevation: 3,
  },
  patientAvatar: {
    width: width * 0.18,
    height: width * 0.18,
    borderRadius: (width * 0.18) / 2,
    marginRight: 15,
  },
  patientName: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  birthdayRow: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  birthdayText: { color: '#555', fontSize: 14 },

  tabContainer: { flexDirection: 'row', marginTop: 20, borderBottomWidth: 1, borderBottomColor: '#A9B69B' },
  tabButton: { 
    flexDirection: 'row', 
    paddingVertical: 10, 
    paddingHorizontal: 20, 
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  tabActive: { backgroundColor: '#E7DBCA', borderLeftWidth: 1, borderRightWidth: 1, borderTopWidth: 1, borderColor: '#A9B69B', marginBottom: -1 },
  tabTextActive: { color: '#4A5D45', fontWeight: 'bold', marginLeft: 5 },
  tabText: { color: '#555', marginLeft: 5 },

  subMenu: { marginTop: 15 },
  subBtnActive: { backgroundColor: '#C9C4B0', padding: 8, borderRadius: 10, alignSelf: 'flex-start', marginBottom: 8 },
  subBtn: { backgroundColor: '#C9C4B0', padding: 8, borderRadius: 10, alignSelf: 'flex-start', opacity: 0.6 },
  subBtnTextActive: { color: 'white', fontSize: 12 },
  subBtnText: { color: 'white', fontSize: 12 },

  sectionContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#C9C4B0',
    borderRadius: 10,
    padding: 15,
  },
  sectionHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  sectionTitle: { fontSize: 20, color: '#555', marginLeft: 10, fontFamily: 'serif' },
  
  label: { color: '#7A8D6E', fontSize: 13, marginBottom: 5, marginTop: 10 },
  inputGroupRow: { flexDirection: 'row' },
  inputSmall: { 
    borderWidth: 1, 
    borderColor: '#C9C4B0', 
    borderRadius: 5, 
    padding: 8, 
    backgroundColor: '#F5F0E6',
    marginBottom: 5,
    fontSize: 14
  },

  rowButtons: { flexDirection: 'row', justifyContent: 'center', marginTop: 10 },
  optionBtn: { 
    backgroundColor: '#91AA86', 
    paddingVertical: 10, 
    paddingHorizontal: 40, 
    borderRadius: 12, 
    marginHorizontal: 10 
  },
  optionBtnText: { color: 'white', fontWeight: 'bold' },

  tabBar: {
    position: 'absolute', bottom: 20, left: 15, right: 15,
    backgroundColor: '#91AA86', height: 70, borderRadius: 20,
    flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', elevation: 10
  },
  tabItem: { alignItems: 'center' },
  tabBarText: { fontSize: 11, color: 'white', marginTop: 4 }
});