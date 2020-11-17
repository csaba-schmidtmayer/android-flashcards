import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { addDeck } from '../actions/deckActions';

const AddDeck = ({ dispatch }) => {
  const [ deckName, setDeckName ] = useState('');
  return(
    <View
      style={styles.container}
    >
      <TextInput
        style={[styles.text, styles.textInput]}
        value={deckName}
        onChangeText={(text) => setDeckName(text)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(addDeck(deckName))}
      >
        <Text
          style={[styles.text, styles.buttonText]}
        >Create deck</Text>
      </TouchableOpacity>
    </View>
  );
};


export default connect()(AddDeck);

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
    padding: 5,
    height: 40,
    backgroundColor: '#00695c',
    borderRadius: 2
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center'
  }
});
