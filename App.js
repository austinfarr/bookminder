//Here we go! :)

//Import libraries
import React, { Component } from 'react';
import {
  View
} from 'react-native';
import Header from './src/components/Header';
import BookList from './src/components/BookList';
import Navigation from './src/components/Navigation';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Navigation />
      </View>
    );
  }
}

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
