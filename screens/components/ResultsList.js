import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ResultItem from "./ResultItem";

const ResultList = ({ categoria, results }) => {
  return (
    <View>
      <Text style={styles.categoria}>{categoria}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <ResultItem result={item} />;
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  categoria: {
    fontSize: 24,
    fontWeight: "500",
    marginLeft: 8,
  },
});

export default ResultList;
