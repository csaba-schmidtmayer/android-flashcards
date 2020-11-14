import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from './pages/Dashboard';
import AddDeck from './pages/AddDeck';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#003d33"
          barStyle="light-content"
        />
        <Stack.Navigator>
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Create deck" component={AddDeck} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1e2e1'
  },
});
