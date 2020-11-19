import { FETCH_DECKS_SUCCESS, DECK_EXISTS, ADD_DECK_SUCCESS, ADD_CARD_SUCCESS } from '../constants/actionTypes';

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
    case ADD_CARD_SUCCESS:
      return ({
        ...state,
        [payload.deck]: {
          ...state[payload.deck],
          cards: [
            ...state[payload.deck].cards,
            payload.card
          ]
        }
      });
    default:
      return state;
  }
};

export default deckReducer;
