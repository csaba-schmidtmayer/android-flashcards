import { AsyncStorage } from 'react-native';
import { createLogic } from 'redux-logic';

import { ADD_DECK } from '../constants/actionTypes';
import { deckExists, addDeckSuccess } from '../actions/deckActions';
import { navigate } from '../utils/rootNavigation';

const validateDeckName = createLogic({
  type: ADD_DECK,

  validate({ getState, action }, allow, reject) {
    const name = action.payload.name;
    const decks = getState().decks;
    const deckNames = Object.keys(decks).map((id) => (decks[id].name.toLowerCase()));
    console.log(deckNames);
    if (!deckNames.includes(name.toLowerCase())) {
      console.log('Name usable', name);
      allow(action);
    }
    else {
      console.log('Deck exists', name);
      reject(deckExists(name));
    }
  }
});

const storeNewDeck = createLogic({
  type: ADD_DECK,

  async process({ getState, action }, dispatch, done) {
    const name = action.payload.name;
    const deck = {
      name,
      cards: []
    };
    try {
      await AsyncStorage.setItem(name, JSON.stringify(deck));
      console.log('success');
      dispatch(addDeckSuccess(deck));
    }
    catch (error) {
      console.log(error);
    }
    finally {
      navigate('Dashboard');
      done();
    }
  }
});

export default [
  validateDeckName,
  storeNewDeck
];
