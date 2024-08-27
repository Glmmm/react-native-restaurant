import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";
import ResultItem from "./ResultItem";

const ResultList = ({ categoria, results, navigation }) => {
  return (
    <View>
      <Text style={styles.categoria}>{categoria}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("Result")}>
              <ResultItem result={item} />
            </TouchableOpacity>
          );
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

export default withNavigation(ResultList);
