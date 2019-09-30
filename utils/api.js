import { AsyncStorage } from 'react-native'

export const FLASHCARD_STORAGE_KEY = "Udacity:FlashCards";

const starterData = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'Is React a Javascript UI library?',
        answer: 'Correct'
      },
      {
        question: 'Correct place to make Ajax requests is in a render method?',
        answer: 'Incorrect'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'Closure is a combination of a function and lexical environment within which that function was declared?',
        answer: 'Yes'
      },
      {
        question: 'JavaScript is considered a weakly typed (or untyped) language?',
        answer: 'Correct'
      }
    ]
  }
}

export function getDecks() {
  return AsyncStorage.getItem(STORAGE_KEY).then(result => {
    if(result !== null) {
      return JSON.parse(result)
    } else {
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(starterData));
      return starterData;
    }
  });
}

export const saveDeck = deck => {
  return AsyncStorage.mergeItem(
    FLASHCARD_STORAGE_KEY,
    JSON.stringify({ [deck.id]: deck })
  );
};

export const saveCard = (id, card) => {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then(results => {
    const data = JSON.parse(results);

    data[id] = {
      ...data[id],
      cards: [
        ...data[id].cards,
        { question: card.question, answer: card.answer }
      ]
    };

    AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(data));
  });
};
