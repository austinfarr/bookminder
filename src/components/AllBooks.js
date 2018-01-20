import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from './Header';
import BookList from './BookList';

class AllBooks extends Component {
  static navigationOptions = {
    tabBarLabel: 'All Books'
  }
  render() {
    return (
      <View>
        <Header headerText={'All Books'} />
        <BookList />
      </View>
    );
  }
}

const styles = {

};

export default AllBooks;
