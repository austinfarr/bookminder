import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import Header from './Header';
import Button from './Button';

class LogOut extends Component {
  static navigationOptions = {
    tabBarLabel: 'Log Out'
  }
  render() {
    return (
      <View style={styles.viewStyle}>
        <Header headerText={'Log Out'} />
        <Button whenClicked={() => firebase.auth().signOut()}>
          Log Out
          </Button>
      </View>
          );
  }
}

const styles = {

};

export default LogOut;
