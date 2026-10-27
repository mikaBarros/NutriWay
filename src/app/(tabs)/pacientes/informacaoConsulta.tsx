import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import styles from "../../../styles";

export default () => {
    const router = useRouter();

    return (
         <View style={styles.container}> 
        <Text>Informção da Consulta</Text>
    </View>
    )
    
}