import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import Header from './Header';
import Button from './Button';
import CardItem from './CardItem';

class LogOut extends Component {
  static navigationOptions = {
    tabBarLabel: 'Log Out'
  }
  render() {
    return (
      <View style={styles.viewStyle}>
        <Header headerText={'Log Out'} />
          <CardItem>
            <Button whenClicked={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardItem>
      </View>
          );
  }
}

const styles = {

};

export default LogOut;
