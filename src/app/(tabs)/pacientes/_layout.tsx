import { Feather } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

export default () => {
    const router = useRouter();

    return (
        <Stack>
            <Stack.Screen 
                name="index" 
                options={{ 
                    title: "Perfil do paciente",
                }}
            />
            <Stack.Screen 
                name="agendamentos" 
                options={{ 
                    title: "Agendamentos",
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={() => router.replace("/(tabs)/pacientes")}
                        >
                            <Feather 
                                name="users" 
                                size={24} 
                                color="black" 
                            />
                        </TouchableOpacity>
                    )
                }}
            />
        </Stack>
    );
}
