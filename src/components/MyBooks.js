import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import Header from './Header';
import BookList from './BookList';


class MyBooks extends Component {

  static navigationOptions = {
    tabBarLabel: 'My Books'
  }

  state = { email: '' };

  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ email: user.email });
      } 
    });
  }

  render() {
    return (
      <View>
        <Header headerText={'My Books'} />
        <BookList
          userName={this.state.email}
        />
      </View>
    );
  }
}

const styles = {

};

export default MyBooks;
