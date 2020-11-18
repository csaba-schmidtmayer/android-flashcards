import { FETCH_DECKS_SUCCESS, DECK_EXISTS, ADD_DECK_SUCCESS } from '../constants/actionTypes';

const deckReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch(type) {
    case FETCH_DECKS_SUCCESS:
      return (payload.decks);
    case DECK_EXISTS:
      return state;
    case ADD_DECK_SUCCESS:
      return ({
        ...state,
        [payload.deck.name]: {
          name: payload.deck.name,
          cards: payload.deck.cards
        }
      });
    default:
      return state;
  }
};

export default deckReducer;
