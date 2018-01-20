import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './Header';
import BookList from './BookList';

class AllBooks extends Component {
  static navigationOptions = {
    tabBarLabel: 'All Books'
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'All Books'} />
        <BookList
          userName={'*'}
        />
      </View>
    );
  }
}


export default AllBooks;
