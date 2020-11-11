import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DeckListItem = (props) => (
  <View
    style={styles.listItem}
  >
    <Text
      style={styles.listItemHeader}
    >
      props.deckName
    </Text>
    <Text
      style={styles.listItemContent}
    >
      {`This deck contains ${props.deckSize > 0 ? props.deckSize : 'no'} flashcard ${props.deckSize === 1 ? '' : 's'}${props.deckSize === 0 ? ' yet' : ''}`}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#fff',
    padding: 20
  },
  listItemHeader: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  listItemContent: {
    fontSize: 20
  }
});

export default DeckListItem;
