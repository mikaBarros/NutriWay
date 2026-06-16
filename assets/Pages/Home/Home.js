import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity, 
  FlatList, 
  Dimensions, 
  StatusBar 
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'; 
import { SafeAreaView } from 'react-native-safe-area-context';

// IMPORTAÇÃO DOS DADOS DO "BANCO" LOCAL
import { LISTA_PACIENTES } from '../../data/Paciente'; 

const { width, height } = Dimensions.get('window');

export default function Inicio({ navigation }) {
  // Estado inicializado com os dados importados
  const [pacientes, setPacientes] = useState(LISTA_PACIENTES);

  const renderItemPaciente = ({ item }) => (
    <TouchableOpacity 
      style={styles.patientItem}
      onPress={() => navigation.navigate('PerfilPaciente', { paciente: item })}
    >
      <View style={styles.patientImageWrapper}>
        <Image source={item.foto} style={styles.patientImage} />
      </View>
      <Text style={styles.patientName} numberOfLines={1}>{item.nome}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

      {/* HEADER */}
      <View style={styles.header}>
        <SafeAreaView edges={['top']} style={styles.safeArea}>
          <View style={styles.headerTop}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Ionicons name="chevron-back" size={width * 0.08} color="white" />
            </TouchableOpacity>
            
            <View style={styles.headerIcons}>
              <TouchableOpacity style={{ marginRight: width * 0.04 }}>
                <Ionicons name="notifications-outline" size={width * 0.07} color="white" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons name="settings-outline" size={width * 0.07} color="white" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.profileSection}>
            <Image 
              source={require('../boasvindas/perfil.png')} 
              style={styles.avatar} 
            />
            <View>
              <Text style={styles.greeting}>Olá,</Text>
              <Text style={styles.userName}>Rayanne Soares Ribeiro</Text>
            </View>
          </View>
        </SafeAreaView>
      </View>

      {/* CONTEÚDO */}
      <View style={styles.content}>
        <View style={styles.patientsCard}>
          <View style={styles.cardHeader}>
            <View>
              <Text style={styles.cardTitle}>Meus Pacientes</Text>
              <Text style={styles.cardSubtitle}>Acompanhe a evolução de cada um</Text>
            </View>
            <Ionicons name="heart-outline" size={width * 0.07} color="#344E2B" />
          </View>

          <FlatList
            data={pacientes} // Dados vindo do import
            renderItem={renderItemPaciente}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
          />
        </View>

        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionButtonText}>Para uma melhor alimentação</Text>
            </TouchableOpacity>
        </View>
      </View>

      {/* TAB BAR */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="home-outline" size={width * 0.07} color="#4A5D45" />
          <Text style={[styles.tabLabel, {color: '#4A5D45'}]}>início</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('PerfilPaciente')} >
          <Ionicons name="people-outline" size={width * 0.07} color="white" />
          <Text style={styles.tabLabel}>Pacientes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <MaterialCommunityIcons name="chart-timeline-variant" size={width * 0.07} color="white" />
          <Text style={styles.tabLabel}>Progresso</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="person-outline" size={width * 0.07} color="white" />
          <Text style={styles.tabLabel}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#E7DBCA' },
  header: {
    backgroundColor: '#A9B69B',
    paddingBottom: height * 0.03,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  safeArea: { paddingHorizontal: width * 0.05 },
  headerTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 },
  headerIcons: { flexDirection: 'row' },
  profileSection: { flexDirection: 'row', alignItems: 'center', marginTop: height * 0.02 },
  avatar: {
    width: width * 0.17,
    height: width * 0.17,
    borderRadius: (width * 0.17) / 2,
    borderWidth: 2,
    borderColor: 'white',
    marginRight: 15,
  },
  greeting: { color: 'white', fontSize: width * 0.05, fontFamily: 'serif' },
  userName: { color: 'white', fontSize: width * 0.045, fontFamily: 'serif', fontWeight: '300' },
  content: { flex: 1, paddingHorizontal: width * 0.04, paddingTop: height * 0.03 },
  patientsCard: { backgroundColor: 'rgba(169, 182, 155, 0.7)', borderRadius: 25, padding: 15 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
  cardTitle: { fontSize: width * 0.05, fontWeight: 'bold', color: '#344E2B' },
  cardSubtitle: { fontSize: width * 0.035, color: '#344E2B' },
  listContainer: { paddingRight: 20 },
  patientItem: { alignItems: 'center', marginRight: width * 0.05, width: width * 0.16 },
  patientImageWrapper: { backgroundColor: 'white', padding: 2, borderRadius: 100, elevation: 3 },
  patientImage: { width: width * 0.15, height: width * 0.15, borderRadius: (width * 0.15) / 2 },
  patientName: { marginTop: 5, fontSize: width * 0.03, color: '#344E2B', fontWeight: '500', textAlign: 'center' },
  buttonContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: height * 0.1 },
  actionButton: { backgroundColor: '#D1CDBC', paddingVertical: height * 0.018, paddingHorizontal: width * 0.1, borderRadius: 12 },
  actionButtonText: { color: 'white', fontSize: width * 0.04, fontWeight: 'bold' },
  tabBar: {
    position: 'absolute', bottom: height * 0.025, left: width * 0.05, right: width * 0.05,
    backgroundColor: '#91AA86', height: height * 0.085, borderRadius: 20,
    flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', elevation: 10,
  },
  tabItem: { alignItems: 'center' },
  tabLabel: { fontSize: width * 0.028, color: 'white', marginTop: 4 },
});