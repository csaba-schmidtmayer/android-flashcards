import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DeckView = ({ navigation, route }) => {
  const isQuizDisabled = route.params.deckSize === 0;

  return (
    <View
      style={styles.container}
    >
      <TouchableOpacity
        style={[styles.button, styles.enabledButton]}
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

export default DeckView;

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
