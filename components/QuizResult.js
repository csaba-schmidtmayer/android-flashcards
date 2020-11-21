import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import buttonStyles from '../styles/buttonStyles';

const QuizResult = ({ percentage, deck, onRestart }) => {
  const navigation = useNavigation();

  const buttonStyle = [buttonStyles.button, buttonStyles.enabledButton];
  const buttonTextStyle = [buttonStyles.buttonText, buttonStyles.enabledButtonText];

  return (
    <View
      style={styles.container}
    >
      <View
        style={styles.textContainer}
      >
        <Text
          style={styles.text}
        >
          You've got
        </Text>
        <Text
          style={styles.percentText}
        >
          {`${percentage}%`}
        </Text>
        <Text
          style={styles.text}
        >
          of the answers right!
        </Text>
      </View>
      <TouchableOpacity
        style={buttonStyle}
        onPress={onRestart}
      >
        <Text
          style={buttonTextStyle}
        >
          Restart quiz
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={buttonStyle}
        onPress={() => {navigation.navigate('DeckView', {
          deckName: deck
        })}}
      >
        <Text
          style={buttonTextStyle}
        >
          Back to deck
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuizResult;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    padding: 20
  },
  textContainer: {
    marginTop: 40,
    marginBottom: 40
  },
  text: {
    fontSize: 24,
    color: '#000',
    textAlign: 'center'
  },
  percentText: {
    fontSize: 48,
    color: '#000',
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20
  }
});
