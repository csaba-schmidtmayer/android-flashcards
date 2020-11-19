import React from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DeckView = ({ navigation, isQuizDisabled, deck }) => {
  return (
    <View
      style={styles.container}
    >
      <TouchableOpacity
        style={[styles.button, styles.enabledButton]}
        onPress={() => navigation.navigate('AddCard', {
          deckName: deck
        })}
      >
        <Text
          style={[styles.buttonText, styles.enabledButtonText]}
        >
          Add new flashcard
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, isQuizDisabled ? styles.disabledButton : styles.enabledButton]}
        disabled={isQuizDisabled}
      >
        <Text
          style={[styles.buttonText, isQuizDisabled ? styles.disabledButtonText : styles.enabledButtonText]}
        >
          Start quiz
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = ({ decks }, { route }) => {
  const deckName = route.params.deckName;

  return ({
    deck: deckName,
    isQuizDisabled: decks[deckName].cards.length === 0
  });
}

export default connect(mapStateToProps)(DeckView);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  button: {
    padding: 10,
    marginTop:20,
    marginBottom: 20,
    borderRadius: 2
  },
  enabledButton: {
    backgroundColor: '#00695c',
  },
  disabledButton: {
    backgroundColor: '#fff'
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center'
  },
  enabledButtonText: {
    color: '#fff'
  },
  disabledButtonText: {
    color: '#cfd8dc'
  }
});
