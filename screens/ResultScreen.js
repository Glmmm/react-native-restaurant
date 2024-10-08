import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "./api/yelp";

const ResultScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos} 
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={style.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  image: {
    width: 300,
    height: 200,
  },
});

export default ResultScreen;
