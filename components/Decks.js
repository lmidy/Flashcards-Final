import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet, FlatList } from "react-native";
import DeckWidget from "./DeckWidget";
import TextButton from "./TextButton";
import { getDecks } from "../utils/api";
import { receiveDecks } from "../actions";
import { white } from "../utils/colors";

class Decks extends Component {
  state = {
    ready: false
  };

  componentDidMount() {
    getDecks()
      .then(decks => this.props.receiveDecks(decks))
      .then(() => {
        this.setState({ ready: true });
      });
  }

  render() {
    const { decks, navigation } = this.props;

    if (!this.state.ready) {
      return (
        <View style={styles.blank}>
          <Text>Loading...</Text>
        </View>
      );
    } else {
      return Object.values(decks).length > 0 ? (
        <View style={styles.container}>
          <FlatList
            data={Object.values(decks)}
            renderItem={({ item }) => (
              <DeckWidget
                id={item.id}
                name={item.name}
                cardCount={item.cards.length}
                navigation={this.props.navigation}
              />
            )}
            keyExtractor={(item, index) => item.name}
          />
        </View>
      ) : (
        <View style={styles.blank}>
          <Text style={{ fontSize: 18 }}>You don't have any decks yet.</Text>
          <TextButton
            onPress={() => {
              navigation.navigate("AddDeck");
            }}
          >
            Create Deck
          </TextButton>
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "flex-start"
  },
  blank: {
    flex: 1,
    backgroundColor: white,
    justifyContent: "center",
    alignItems: "center"
  }
});
const mapStateToProps = decks => ({
  decks
});
const mapDispatchToProps = dispatch => ({
  getDecks: decks => dispatch(getDecks(decks))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Decks);
