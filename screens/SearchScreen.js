import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "./components/SearchBar";
import yelp from "./api/yelp";
const SearchScreen = () => {
  const [searchInput, setSearchIput] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const api = async () => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchInput,
          location: "sao paulo",
        },
      });
      setRestaurants(response.data.businesses);
    } catch (err) {
      setErrorMessage("Deu ruim");
    }
  };
  return (
    <View>
      <SearchBar
        searchInput={searchInput}
        onSearchChange={setSearchIput}
        onSearchSubmit={api}
      ></SearchBar>
      {errorMessage ? (
        <Text>{errorMessage} </Text>
      ) : (
        <Text>Tem esses aqui {restaurants.length} results</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
