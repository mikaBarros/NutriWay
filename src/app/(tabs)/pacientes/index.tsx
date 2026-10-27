import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../../../styles";

export default () => {
    const router = useRouter();
    
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Perfil do paciente </Text>
            <View>
                <TouchableOpacity style={styles.botao}
                    onPress={() => router.replace("/(tabs)/pacientes/informacaoConsulta")}
                >
                    <Text style={styles.textoBotao}>Informação da Consulta</Text>
                    
                </TouchableOpacity>
                 <TouchableOpacity style={styles.botao} onPress={() => router.replace("/(tabs)/pacientes/informacaoPaciente")}>
                    <Text style={styles.textoBotao}>Informação do paciente</Text>

            </TouchableOpacity>
            </View>
        </View>
    );
}
