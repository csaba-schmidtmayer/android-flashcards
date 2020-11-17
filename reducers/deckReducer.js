import { DECK_EXISTS, ADD_DECK_SUCCESS } from '../constants/actionTypes';

const deckReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch(type) {
    case DECK_EXISTS:
      return state;
    case ADD_DECK_SUCCESS:
      return ({
        ...state,
        [payload.deck.id]: {
          id: payload.deck.id,
          name: payload.deck.name,
          cards: payload.deck.cards
        }
      });
    default:
      return state;
  }
};

export default deckReducer;
