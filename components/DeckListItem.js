import React, { useState } from 'react';
import { View, Pressable, Animated, StyleSheet } from 'react-native';

const DeckListItem = ({ deckName, deckSize, onPress }) => {
  const [animation, setAnimation] = useState(new Animated.Value(1));

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(animation, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true
      }),
      Animated.timing(animation, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true
      })
    ])
      .start(() => {onPress()});
  };

  return (
    <Pressable
      onPress={handlePress}
    >
      <View
        style={styles.listItem}
      >
        <Animated.Text
          style={[styles.listItemHeader, {opacity: animation}]}
        >
          {deckName}
        </Animated.Text>
        <Animated.Text
          style={[styles.listItemContent, {opacity: animation}]}
        >
          {`This deck contains ${deckSize > 0 ? deckSize : 'no'} flashcard${deckSize === 1 ? '' : 's'}${deckSize === 0 ? ' yet' : ''}`}
        </Animated.Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#fff',
    padding: 20,
    borderWidth: 0.5,
    borderRadius: 2
  },
  listItemHeader: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  listItemContent: {
    fontSize: 16
  }
});

export default DeckListItem;
