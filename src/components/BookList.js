//Import libraries
import React, { Component } from 'react';
import firebase from 'firebase';
import {
  ScrollView,
  View
} from 'react-native';
import BookDetail from './BookDetail';

//Make components
class BookList extends Component {
  //Initialize state with empty array (no data)

  static navigationOptions = {
    tabBarLabel: 'All Books'
}

state = { books: [] };

  //Called the moment the component is called
  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase.database().ref('books').once('value', snapshot => {
          this.setState({ books: snapshot.val() });
        });
      }
});
  }

  //Fetching data from the state
  renderBooks() {
    const user = this.props.userName;
    let filtered = [];
    if (user === '*') {
      filtered = this.state.books;
    } else {
      filtered = this.state.books.filter(book => book.checkedOutBy === user);
    }
    return filtered.map(whatever =>
      <BookDetail key={whatever.title} record={whatever} />);
  }

  //Render must return some JSX
  render() {
    console.log(this.state);

    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          {this.renderBooks()}
        </ScrollView>
      </View>
    );
  }
}

//Export component
export default BookList;
