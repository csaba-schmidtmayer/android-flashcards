import { AsyncStorage } from 'react-native';
import { createLogic } from 'redux-logic';

import { FETCH_DECKS, ADD_DECK, ADD_CARD } from '../constants/actionTypes';
import { DECKS } from '../constants/const';
import { fetchDecksSuccess, deckExists, addDeckSuccess, addCardSuccess } from '../actions/deckActions';
import { navigate } from '../utils/rootNavigation';

const fetchDecksfromStorage = createLogic({
  type: FETCH_DECKS,

  async process({ getState, action }, dispatch, done) {
    try {
      const deckData = await AsyncStorage.getItem(DECKS);
      if (deckData === null) {
        // If no storage entry exists, create one.
        AsyncStorage.setItem(DECKS, JSON.stringify({}));
      }
      else {
        console.log(deckData);
        dispatch(fetchDecksSuccess(JSON.parse(deckData)));
      }
    }
    catch (error) {
      console.log(error);
    }
    finally {
      done();
    }
  }
});

const validateDeckName = createLogic({
  type: ADD_DECK,

  validate({ getState, action }, allow, reject) {
    const name = action.payload.name;
    const decks = getState().decks;
    const deckNames = Object.keys(decks).map((id) => (id.toLowerCase()));
    if (!deckNames.includes(name.toLowerCase())) {
      allow(action);
    }
    else {
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
      await AsyncStorage.mergeItem(DECKS, JSON.stringify({[name]: deck}));
      dispatch(addDeckSuccess(deck));
      navigate('Dashboard');
    }
    catch (error) {
      console.log(error);
    }
    finally {
      done();
    }
  }
});

const storeNewCard = createLogic({
  type: ADD_CARD,

  async process({ getState, action }, dispatch, done) {
    const deckName = action.payload.deck;
    const card = {
      question: action.payload.question,
      answer: action.payload.answer
    };
    const deck = {
      name: deckName,
      cards: [
        ...getState().decks[deckName].cards,
        card
      ]
    };
    console.log(deck);
    try {
      await AsyncStorage.mergeItem(DECKS, JSON.stringify({[deckName]: deck}));
      dispatch(addCardSuccess(deckName, card));
      navigate('DeckView', {
        deckName: deckName
      });
    }
    catch (error) {
      console.log(error);
    }
    finally {
      done();
    }
  }
});

export default [
  fetchDecksfromStorage,
  validateDeckName,
  storeNewDeck,
  storeNewCard
];
