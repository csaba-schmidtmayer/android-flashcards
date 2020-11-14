import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Pressable, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';

import DeckListItem from '../components/DeckListItem';

const Dashboard = (props) => {
  return (
    <View
      style={styles.container}
    >
      <FlatList
        renderItem={renderItem}
        data={placeHolderData}
        keyExtractor={(item) => item.id.toString()}
      />
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Create deck')}
        style={styles.addButton}
      >
        <MaterialIcons
          name="add"
          size={48}
          color="#fff"
        />
      </TouchableOpacity>
    </View>
  );
};

const renderItem = ({ item }) => (
  <View
    style={styles.itemContainer}
  >
    <Pressable
      onPress={() => console.log(item.id)}
    >
      <DeckListItem
        deckName={item.deckName}
        deckSize={item.deckSize}
      />
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: 10
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#00695c',
    padding: 10,
    borderRadius: 34
  },
  itemContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10
  }
});

const placeHolderData = [
  {
    id: 1,
    deckName: 'Javascript',
    deckSize: 7
  },
  {
    id: 2,
    deckName: 'Python',
    deckSize: 0
  },
  {
    id: 3,
    deckName: 'Java',
    deckSize: 1
  },
  {
    id: 4,
    deckName: 'C#',
    deckSize: 14
  },
  {
    id: 5,
    deckName: 'C++',
    deckSize: 5
  },
  {
    id: 6,
    deckName: 'Perl',
    deckSize: 25
  },
  {
    id: 7,
    deckName: 'Lisp',
    deckSize: 2
  },
  {
    id: 8,
    deckName: 'Kotlin',
    deckSize: 17
  },
  {
    id: 9,
    deckName: 'Object-C',
    deckSize: 4
  },
  {
    id: 10,
    deckName: 'Haskell',
    deckSize: 0
  },
  {
    id: 11,
    deckName: 'Erlang',
    deckSize: 1
  }
];

export default Dashboard;
