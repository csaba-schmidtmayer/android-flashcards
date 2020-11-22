import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import QuizQuestion from '../components/QuizQuestion';
import QuizResult from '../components/QuizResult';
import { rescheduleReminder } from '../utils/notifications';

const Quiz = ({ name, cards }) => {
  const [ index, setIndex ] = useState(0);
  const [ shuffledCards, setShuffledCards ] = useState(shuffle(cards));
  const [ correctAnswers, setCorrectAnswers ] = useState(0);
  const [ isFinished, setFinished ] = useState(false);

  useEffect(() => {
    rescheduleReminder();
  }, []);

  const restart = () => {
    setIndex(0);
    setShuffledCards(shuffle(cards));
    setCorrectAnswers(0);
    setFinished(false);
  }

  const markCorrect = () => {
    setCorrectAnswers(correctAnswers + 1);
    markWrong();
  }

  const markWrong = () => {
    if (index === cards.length - 1) {
      setFinished(true);
    }
    else {
      setIndex(index + 1);
    }
  }

  return (
    isFinished
      ? <QuizResult
        percentage={Math.round(correctAnswers / cards.length * 100)}
        deck={name}
        onRestart={restart}
      />
      : <QuizQuestion
        index={index + 1}
        length={cards.length}
        question={shuffledCards[index].question}
        answer={shuffledCards[index].answer}
        onCorrect={markCorrect}
        onWrong={markWrong}
      />
  );
};

const shuffle = (cards) => {
  const shuffledCards = cards.slice(0);

  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }

  return shuffledCards;
};

const mapStateToProps = ({ decks }, { route }) => {
  const deck = route.params.deckName;

  return ({
    name: deck,
    cards: decks[deck].cards
  });
};

export default connect(mapStateToProps)(Quiz);
