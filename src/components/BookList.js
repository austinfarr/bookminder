//Import libraries
import React, { Component } from 'react';
import {
  ScrollView,
  View
} from 'react-native';
import BookDetail from './BookDetail';
import books from './books.json';
import Header from './Header';

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
    return this.state.books.map(whatever =>
      <BookDetail key={whatever.title} record={whatever} />);
  }

  //Render must return some JSX
  render() {
    console.log(this.state);

    return (
      <View>
        <Header headerText={'My Books'} />
        <ScrollView>
          {this.renderBooks()}
        </ScrollView>
      </View>
    );
  }
}

//Export component
export default BookList;
