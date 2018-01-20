//Import libraries
import React, { Component } from 'react';
import {
  ScrollView,
  View
} from 'react-native';
import BookDetail from './BookDetail';
import books from './books.json';

//Make components
class BookList extends Component {
  //Initialize state with empty array (no data)
  state = { books: [] };

  static navigationOptions = {
    tabBarLabel: 'All Books'
}

  //Called the moment the component is called
  componentWillMount() {
    this.setState({ books });
  }

  //Fetching data from the state
  renderBooks() {
    const user = this.props.userName;
    let filtered = [];
    if (user === '*') {
      filtered = books;
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
      <View>
        <ScrollView>
          {this.renderBooks()}
        </ScrollView>
      </View>
    );
  }
}

//Export component
export default BookList;
