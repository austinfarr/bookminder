//Here we go! :)

//Import libraries
import React from 'react';
import {
  View
} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 //Put text on screen
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'My Books'} />
    <AlbumList />
  </View>
);

export default App;

//Firebase JUNK - Disregard
const firebase = require('firebase');

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAzYM8nXEPAAtqz3I1Oj79Sq-5MDn00xe4',
  authDomain: 'fbla-bookminder.firebaseio.com',
  databaseURL: 'https://fbla-bookminder.firebaseio.com',
  storageBucket: '',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
