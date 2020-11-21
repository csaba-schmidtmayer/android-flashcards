import React from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import buttonStyles from '../styles/buttonStyles';

const DeckView = ({ navigation, isQuizDisabled, deck }) => {
  return (
    <View
      style={styles.container}
    >
      <TouchableOpacity
        style={[buttonStyles.button, buttonStyles.enabledButton]}
        onPress={() => navigation.navigate('AddCard', {
          deckName: deck
        })}
      >
        <Text
          style={[buttonStyles.buttonText, buttonStyles.enabledButtonText]}
        >
          Add new flashcard
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[buttonStyles.button, isQuizDisabled ? buttonStyles.disabledButton : buttonStyles.enabledButton]}
        onPress={() => navigation.navigate('Quiz', {
          deckName: deck
        })}
        disabled={isQuizDisabled}
      >
        <Text
          style={[buttonStyles.buttonText, isQuizDisabled ? buttonStyles.disabledButtonText : buttonStyles.enabledButtonText]}
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
  }
});
