//Here we go! :)

//Import libraries

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

const firebase = require('firebase');

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAzYM8nXEPAAtqz3I1Oj79Sq-5MDn00xe4',
  authDomain: 'fbla-bookminder.firebaseio.com',
  databaseURL: 'https://fbla-bookminder.firebaseio.com',
  storageBucket: '',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const App = () => (<Text>Some Different Text</Text>);
export default App;
