import makeActionCreator from './makeActionCreator';
import { ADD_DECK, DECK_EXISTS, ADD_DECK_SUCCESS } from '../constants/actionTypes';

export const addDeck = makeActionCreator(ADD_DECK, 'name');
export const deckExists = makeActionCreator(DECK_EXISTS, 'name');
export const addDeckSuccess = makeActionCreator(ADD_DECK_SUCCESS, 'deck');
