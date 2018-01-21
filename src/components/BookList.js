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

state = { books: [], email: '' };

  //Called the moment the component is called
  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ email: user.email });
        firebase.database().ref('books').on('value', snapshot => {
          this.setState({ books: snapshot.val() });
        });
      }
});
  }

  checkOut = (book) => {
  const firstDay = new Date();
  book.checkedOutBy = this.state.email;
  const dueDate = new Date(firstDay.getTime() + 7 * 24 * 60 * 60 * 1000);
  book.dueDate = dueDate.getTime();
  const email = this.state.email;
    firebase.database().ref('books').child(book.uuid).set(book)
    .then(() => {
        console.log(`${book.title} checked out by ${email}`);var firstDay = new Date("2009/06/25");
    })
    .catch((e) => {
        console.log(`Error checking out ${book.title} (${book.uuid}) by ${email}`);
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
      <BookDetail
        key={whatever.title}
        record={whatever}
        onCheckOut={this.checkOut}
        email={this.state.email}
      />);
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
