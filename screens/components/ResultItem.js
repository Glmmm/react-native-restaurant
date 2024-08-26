import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { isConfigured } from "react-native-reanimated";

const ResultItem = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.title}>{result.name}</Text>

      <View style={styles.info}>
        <Text style={styles.info_text}>
          {result.rating}
          <FontAwesome name="star" size={16} color="black" />
        </Text>

        <Text style={styles.info_text}>
          {result.review_count}
          <FontAwesome name="comments" size={16} color="black" />
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 8,
  },
  info: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  info_text: {
    marginRight: 8,
  },
});

export default ResultItem;
