import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Pressable, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const QuizQuestion = (props) => {
  const { index, length, question, answer, onCorrect, onWrong } = props;
  const [ isQuestionShown, setQuestionShown ] = useState(true);

  const handleAnswer = (isCorrect) => {
    setQuestionShown(true);
    if (isCorrect) {
      onCorrect();
    }
    else {
      onWrong();
    }
  };

  return (
    <View
      style={styles.container}
    >
      <Text
        style={styles.counterText}
      >
        {`Question ${index} of ${length}`}
      </Text>
      <Pressable
        onPress={() => {setQuestionShown(!isQuestionShown)}}
      >
        <View
          style={styles.card}
        >
          <Text
            style={styles.cardText}
          >
            {isQuestionShown ? question : answer}
          </Text>
        </View>
      </Pressable>
      <View
        style={styles.buttonContainer}
      >
        <TouchableOpacity
          style={[styles.button, styles.correctAnswer]}
          onPress={() => handleAnswer(true)}
        >
          <MaterialIcons
            name="check"
            size={48}
            color="#fff"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.wrongAnswer]}
          onPress={() => handleAnswer(false)}
        >
          <MaterialIcons
            name="close"
            size={48}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QuizQuestion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  counterText: {
    fontSize: 24
  },
  card: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    height: 300,
    padding: 20,
    borderWidth: 0.5,
    borderRadius: 2,
    marginTop: 40,
    marginBottom: 40
  },
  cardText: {
    fontSize: 24,
    color: '#000',
    textAlign: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    padding: 10,
    borderRadius: 34
  },
  correctAnswer: {
    backgroundColor: '#00c853'
  },
  wrongAnswer: {
    backgroundColor: '#d50000'
  }
});
