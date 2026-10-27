import { AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { FlatList, Pressable, Text, TextInput, View } from "react-native";

export default () => {
    const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL;
    const APIKEY = process.env.EXPO_PUBLIC_SUPABASE_KEY;

    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [lista, setLista] = useState([]);

    const buscar = async () => {
        try {
            const response = await fetch(`${SUPABASE_URL}/paciente`, {
                method: 'GET',
                headers: {
                    apikey: APIKEY
                },
            });
            console.log(response);
            const data = await response.json();
            setLista(data);
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
        }
    }

    useEffect(() => {
        buscar();
    } ,[]);

    const adiciona = async () => {
        try {
            const response = await fetch(`${SUPABASE_URL}/paciente`, {
                method: 'POST',
                headers: {
                    apikey: APIKEY,
                    'Content-Type': 'application/json',
                    Prefer: 'return=representation',
                },
                body: JSON.stringify({nome, endereco})
            });
            if (!response.ok) {
                throw new Error(`Erro ao adicionar: ${response.status}`);
            }
            setNome("");
            buscar();
        } catch (error) {
            console.error('Erro ao Adicionar:', error);
        }
    }   

   return (
         <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: 'white'
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          width: '100%'
        }}
      >
        <TextInput
          placeholder="Digite um nome ..."
          value={nome}
          onChangeText={ t => setNome(t)}
          style={{
            flex: 1,
            borderWidth: 1,
            padding: 5
          }}
        />
        <TextInput
          placeholder="Digite um endereço ..."
          value={endereco}
          onChangeText={ t => setEndereco(t)}
          style={{
            flex: 1,
            borderWidth: 1,
            padding: 5
          }}
        />
        <Pressable 
          onPress={ adiciona }
        >
          <AntDesign name="plus-circle" size={24} color="black" />
        </Pressable>
      </View>
      <FlatList
        data={lista}
        renderItem={ ({item}) => <View><Text>{item.nome} - {item.endereco}</Text></View> }
        ItemSeparatorComponent={ () => <View style={{ height: 2 }} />}
        style={{
          width: '100%'
        }}
      />
    </View>
    );
}