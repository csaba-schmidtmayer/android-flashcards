import makeActionCreator from './makeActionCreator';
import { FETCH_DECKS, FETCH_DECKS_SUCCESS, ADD_DECK, DECK_EXISTS, ADD_DECK_SUCCESS } from '../constants/actionTypes';

export const fetchDecks = makeActionCreator(FETCH_DECKS);
export const fetchDecksSuccess = makeActionCreator(FETCH_DECKS_SUCCESS, 'decks');
export const addDeck = makeActionCreator(ADD_DECK, 'name');
export const deckExists = makeActionCreator(DECK_EXISTS, 'name');
export const addDeckSuccess = makeActionCreator(ADD_DECK_SUCCESS, 'deck');
