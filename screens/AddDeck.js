import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { addDeck } from '../actions/deckActions';
import buttonStyles from '../styles/buttonStyles';

const AddDeck = ({ dispatch }) => {
  const [ deckName, setDeckName ] = useState('');
  return(
    <View
      style={styles.container}
    >
      <TextInput
        style={styles.textInput}
        value={deckName}
        onChangeText={(text) => setDeckName(text)}
        placeholder="Enter the name of the deck"
      />
      <TouchableOpacity
        style={[buttonStyles.button, deckName === '' ? buttonStyles.disabledButton : buttonStyles.enabledButton]}
        onPress={() => dispatch(addDeck(deckName))}
        disabled={deckName === ''}
      >
        <Text
          style={[buttonStyles.buttonText, deckName === '' ? buttonStyles.disabledButtonText : buttonStyles.enabledButtonText]}
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
  textInput: {
    fontSize: 20,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#00695c',
    marginBottom: 40
  }
});
