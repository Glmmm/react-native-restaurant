import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { isConfigured } from "react-native-reanimated";

const ResultItem = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.title}>{result.name}</Text>

      <View style={styles.info}>
        <View style={styles.info}>
          <Text style={styles.info_text}>{result.rating}</Text>
          <FontAwesome name="star" style={styles.icon_star} />
        </View>
        <View style={styles.info}>
          <Text style={styles.info_text}>{result.review_count}</Text>
          <FontAwesome name="comments" style={styles.icon_comment} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    padding: 8,
    borderColor: "#afafaf",
    borderWidth: 1,
    borderRadius: 8,
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
    paddingRight: 8,
  },
  info_text: {
    marginRight: 2,
  },
  icon_star: {
    size: 16,
    color: "#FFC600",
  },
  icon_comment: {
    size: 16,
    color: "#666666",
  },
});

export default ResultItem;
