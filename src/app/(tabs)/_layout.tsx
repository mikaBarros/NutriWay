import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { Tabs } from "expo-router";

export default () => {
    return (
        <Tabs>
            <Tabs.Screen 
                name="index" 
                options={{ 
                    title: "Início",
                    tabBarIcon: ({ color, size, focused }) => (
                        <AntDesign 
                            name="home" 
                            size={size} 
                            color={color}
                        />
                    ),
                }} 
            />
            <Tabs.Screen 
                name="pacientes" 
                options={{ 
                    title: "Pacientes",
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => (
                        <Feather 
                            name="users" 
                            size={size} 
                            color={color} 
                        />
                    ),
                }} 
            />
            <Tabs.Screen 
                name="progresso" 
                options={{ 
                    title: "Progresso",
                    tabBarIcon: ({ color, size, focused }) => (
                        <SimpleLineIcons 
                            name="graph" 
                            size={size} 
                            color={color} 
                        />
                    ),
                }} 
            />
            <Tabs.Screen 
                name="perfil" 
                options={{ 
                    title: "Perfil",
                    tabBarIcon: ({ color, size, focused }) => (
                        <Feather 
                            name="user"
                            size={size} 
                            color={color} 
                        />
                    ),
                }} 
            />
        </Tabs>
    );
}