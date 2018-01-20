//Import libraries
import React, { Component } from 'react';
import {
  View
} from 'react-native';
import BookDetail from './BookDetail';
import books from './books.json';

//Make components
class BookList extends Component {
  //Initialize state with empty array (no data)
  state = { books: [] };

  //Called the moment the component is called
  componentWillMount() {
    //Requests HTTP and then makes the state 'albums' have a
    //list of objects and re-renders the state of albumlist
    //axios.get('https://firebasestorage.googleapis.com/v0/b/fbla-bookminder.appspot.com/o/books.json?alt=media&token=28ac3f6c-8156-458d-8e80-fa916beb209a')
      //.then(response => this.setState({ albums: response.data }));
    this.setState({ books });
  }

  //Fetching data from the state
  renderBooks() {
    return this.state.books.map(whatever =>
      <BookDetail key={whatever.title} record={whatever} />);
  }

  //Render must return some JSX
  render() {
    console.log(this.state);

    return (
      <View>
        {this.renderBooks()}
      </View>
    );
  }
}

//Export component
export default BookList;
