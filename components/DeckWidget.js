import React from "react";
import pluralize from "pluralize";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { white, blue } from "../utils/colors";

const DeckWidget = ({ id, name, cardCount, navigation }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() =>
      navigation.navigate("DeckDetail", { deckId: id, name: name })
    }
  >
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.count}>{`${cardCount} ${pluralize(
      "Card",
      cardCount
    )}`}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: white,
    minHeight: 150,
    marginBottom: 10,
    padding: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: blue
  },
  name: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 5
  },
  count: {
    fontSize: 20,
    textAlign: "center",
    color: blue,
    marginBottom: 5
  }
});

export default DeckWidget;
