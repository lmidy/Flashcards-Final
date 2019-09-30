export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const CREATE_DECK = 'CREATE_DECK'
export const CREATE_CARD = 'CREATE_CARD'

export function receiveDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function createDeck (id,name) {
  return {
    type: CREATE_DECK,
    id,
    name
  }
}

export function createCard (id, question, answer) {
  return {
    type: CREATE_CARD,
    id,
    question,
    answer
  }
}
