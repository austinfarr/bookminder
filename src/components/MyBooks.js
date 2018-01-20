import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from './Header';
import BookList from './BookList';

class MyBooks extends Component {
  static navigationOptions = {
    tabBarLabel: 'My Books'
  }
  render() {
    return (
      <View>
        <Header headerText={'My Books'} />
        <BookList
          userName={'austin@farrnet.com'}
        />
      </View>
    );
  }
}

const styles = {

};

export default MyBooks;
