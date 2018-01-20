//Import libraries
import React, { Component } from 'react';
import {
  ScrollView
} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

//Make components
class AlbumList extends Component {
  //Initialize state with empty array (no data)
  state = { albums: [] };

  //Called the moment the component is called
  componentWillMount() {
    //Requests HTTP and then makes the state 'albums' have a
    //list of objects and re-renders the state of albumlist
    axios.get('https://firebasestorage.googleapis.com/v0/b/fbla-bookminder.appspot.com/o/books.json?alt=media&token=28ac3f6c-8156-458d-8e80-fa916beb209a')
      .then(response => this.setState({ albums: response.data }));
  }

  //Fetching data from the state
  renderAlbums() {
    return this.state.albums.map(whatever =>
      <AlbumDetail key={whatever.title} record={whatever} />);
  }

  //Render must return some JSX
  render() {
    console.log(this.state);

    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

//Export component
export default AlbumList;
