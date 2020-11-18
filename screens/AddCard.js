import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { addCard } from '../actions/deckActions';

const AddCard = ({ dispatch }) => {
  const [ question, setQuestion ] = useState('');
  const [ answer, setAnswer ] = useState('');

  return(
    <View
      style={styles.container}
    >
      <TextInput
        style={[styles.text, styles.textInput]}
        value={question}
        onChangeText={(text) => setQuestion(text)}
        placeholder="Enter a question"
      />
      <TextInput
        style={[styles.text, styles.textInput]}
        value={answer}
        onChangeText={(text) => setAnswer(text)}
        placeholder="Enter the answer"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(addCard(question, answer))}
        disabled={ question === '' || answer === ''}
      >
        <Text
          style={[styles.text, styles.buttonText]}
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
  text: {
    fontSize: 20
  },
  textInput: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#00695c',
    marginBottom: 40
  },
  button: {
    padding: 10,
    backgroundColor: '#00695c',
    borderRadius: 2
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center'
  }
});
