import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const SearchBar = ({ searchInput, onSearchChange, onSearchSubmit }) => {
  return (
    <View style={styles.background}>
      <Ionicons name="search" style={styles.icon} />
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Pesquisar"
        value={searchInput}
        onChangeText={onSearchChange}
        onEndEditing={onSearchSubmit}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F0EEEE",
    height: 48,
    margin: 8,
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: "row",
  },
  input: {
    fontSize: 16,
    flex: 1,
  },
  icon: {
    fontSize: 24,
    alignSelf: "center",
    padding: 8,
    color: "#666666",
  },
});

export default SearchBar;
