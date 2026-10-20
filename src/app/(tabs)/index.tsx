import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";
import styles from "../../styles";

export default () => {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text>Teste</Text>
            <Button
                title="Agendamentos"
                onPress={() => router.push("/(tabs)/pacientes/agendamentos")}
            />
        </View>
    );
}