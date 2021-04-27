import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import baseUrl from "../api/baseURL";
// import { Container } from './styles';

const Detalhes = ({ route }) => {
  const { id, fase } = route.params;
  const [faseAtual, setFaseAtual] = useState();
  const getFase = async () => {
    const response = await baseUrl(`/campeonatos/${id}/fases/${fase}`);
    return setFaseAtual(response.data);
  };
  useEffect(() => {
    getFase();
  }, []);

  return (
    <View>
      {faseAtual ? (
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={faseAtual.chaves}
          keyExtractor={(result) => result.id}
          renderItem={({ item }) => {
            return (
              <>
                <Text>{item.partida_ida.placar}</Text>
              </>
            );
          }}
        />
      ) : null}
    </View>
  );
};

export default Detalhes;
