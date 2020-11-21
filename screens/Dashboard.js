import React, { useState } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList, TouchableOpacity, Pressable, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';

import DeckListItem from '../components/DeckListItem';
import { navigate } from '../utils/rootNavigation';

const Dashboard = (props) => {
  return (
    <View
      style={styles.container}
    >
      {
        props.decks.length === 0
          ? null
          : (
            <FlatList
              renderItem={renderItem}
              data={props.decks}
              keyExtractor={(item) => item.deckName}
            />
          )
      }
      <TouchableOpacity
        onPress={() => props.navigation.navigate('AddDeck')}
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
      onPress={() => navigate('DeckView', {
        deckName: item.deckName,
        numOfCards: item.deckSize
      })}
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
    flex: 1,
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

const mapStateToProps = ({ decks }) => {
  const deckList = Object.keys(decks).map((id) => ({
    deckName: decks[id].name,
    deckSize: decks[id].cards.length
  }));
  return ({
    decks: deckList
  });
};

export default connect(mapStateToProps)(Dashboard);
