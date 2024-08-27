import React, { useState } from "react";
import { Text, ScrollView, View, StyleSheet } from "react-native";
import SearchBar from "./components/SearchBar";
import useResults from "./hooks/useResults";
import ResultList from "./components/ResultsList";

const SearchScreen = ({ navigation }) => {
  const [searchInput, setSearchIput] = useState("");
  const [searchApi, restaurants, errorMessage] = useResults();

  const filterByPrice = (price) => {
    return restaurants.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style={styles.container}>
      <SearchBar
        searchInput={searchInput}
        onSearchChange={setSearchIput}
        onSearchSubmit={() => searchApi(searchInput)}
      ></SearchBar>

      <ScrollView>
        <ResultList results={filterByPrice("$")} categoria="Ta duro dorme" />
        <ResultList results={filterByPrice("$$")} categoria="Salário caiu" />
        <ResultList results={filterByPrice("$$$")} categoria="Como é amigo" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 8,
  },
});

export default SearchScreen;
