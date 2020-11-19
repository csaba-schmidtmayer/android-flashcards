import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { addCard } from '../actions/deckActions';
import buttonStyles from '../styles/buttonStyles';

const AddCard = ({ route, dispatch }) => {
  const deck = route.params.deckName;
  const [ question, setQuestion ] = useState('');
  const [ answer, setAnswer ] = useState('');
  const [ isSubmitDisabled, setSubmitDisabled ] = useState(true);

  const onQuestionChange = (text) => {
    setSubmitDisabled(text === '' || answer === '');
    setQuestion(text);
  };

  const onAnswerChange = (text) => {
    setSubmitDisabled(question === '' || text === '');
    setAnswer(text);
  };

  return(
    <View
      style={styles.container}
    >
      <TextInput
        style={styles.textInput}
        value={question}
        onChangeText={(text) => onQuestionChange(text)}
        placeholder="Enter a question"
      />
      <TextInput
        style={styles.textInput}
        value={answer}
        onChangeText={(text) => onAnswerChange(text)}
        placeholder="Enter the answer"
      />
      <TouchableOpacity
        style={[buttonStyles.button, isSubmitDisabled ? buttonStyles.disabledButton : buttonStyles.enabledButton]}
        onPress={() => dispatch(addCard(deck, question, answer))}
        disabled={isSubmitDisabled}
      >
        <Text
          style={[buttonStyles.buttonText, isSubmitDisabled ? buttonStyles.disabledButtonText : buttonStyles.enabledButtonText]}
        >
          Add card to deck
        </Text>
      </TouchableOpacity>
    </View>
  );
};


export default connect()(AddCard);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  textInput: {
    fontSize: 20,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#00695c',
    marginBottom: 40
  }
});
