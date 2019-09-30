import { RECEIVE_DECKS, CREATE_DECK, CREATE_CARD } from "../actions";

function decks (state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      };
    case CREATE_DECK: {
      return {
        ...state,
        [action.id]: {
          id: action.id,
          name: action.name,
          cards: []
        }
      };
    }
    case CREATE_CARD: {
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          cards: [
            ...state[action.id].cards,
            { question: action.question, answer: action.answer }
          ]
        }
      };
    }
    default:
      return state;
  }
}

export default decks;
