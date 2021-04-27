import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import baseUrl from "../api/baseURL";

const Campeonatos = ({ navigation }) => {
  const [campeonatos, setCampeonatos] = useState([]);
  const getCampeonatos = async () => {
    const response = await baseUrl.get("/campeonatos");
    setCampeonatos(response.data);
  };
  useEffect(() => {
    getCampeonatos();
  }, []);
  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={campeonatos}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <>
              {item.campeonato_id === 2 ? (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Rodadas", { id: item.campeonato_id })
                  }
                >
                  <Text>{item.nome}</Text>
                </TouchableOpacity>
              ) : null}
            </>
          );
        }}
      />
    </View>
  );
};

export default Campeonatos;
