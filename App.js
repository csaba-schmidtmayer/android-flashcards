import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';


import Dashboard from './screens/Dashboard';
import AddDeck from './screens/AddDeck';
import DeckView from './screens/DeckView';
import AddCard from './screens/AddCard';
import Quiz from './screens/Quiz';
import rootReducer from './reducers';
import logic from './logic';
import { navigationRef } from './utils/rootNavigation';
import { fetchDecks } from './actions/deckActions';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <View style={styles.container}>
          <StatusBar
            backgroundColor="#003d33"
            barStyle="light-content"
          />
          <Stack.Navigator>
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={{
                title: 'Dashboard'
              }}
            />
            <Stack.Screen
              name="AddDeck"
              component={AddDeck}
              options={{
                title: 'Create new deck'
              }}
            />
            <Stack.Screen
              name="DeckView"
              component={DeckView}
              options={({ route }) => ({
                title: route.params.deckName
              })}
            />
            <Stack.Screen
              name="AddCard"
              component={AddCard}
              options={{
                title: 'Create new flashcard'
              }}
            />
            <Stack.Screen
              name="Quiz"
              component={Quiz}
              options={{
                title: 'Test yourself'
              }}
            />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </Provider>
  );
}

const store = createStore(rootReducer, applyMiddleware(logic));
store.dispatch(fetchDecks());

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1e2e1'
  },
});
