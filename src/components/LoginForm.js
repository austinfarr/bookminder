import React, { Component } from 'react';
import firebase from 'firebase';
import { Text, Alert } from 'react-native';
import Spinner from './Spinner';
import Card from './Card';
import CardItem from './CardItem';
import Input from './Input';
import Button from './Button';
//import TestAlert from './TestAlert';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(this.onNewAccount.bind(this));
  }

  onNewAccount() {
    const { email, password } = this.state;

    Alert.alert(
    'No account found for email',
    'Would you like to create an account with this information?',
    [
      { text: 'Yes',
      onPress: () => {
          firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this));
} },
      { text: 'No', onPress: (this.onLoginFail.bind(this)) },
    ],
    { cancelable: false }
  );
  }

  onLoginFail() {
    this.setState({
      error: 'Authentication Failed.',
      loading: false,
    });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner spinnerSize="small" />;
    }

    return (
      <Button
        whenClicked={this.onButtonPress.bind(this)}
      >
        Log In
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardItem>
          <Input
            placeHolder="john@appleseed.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            style={{ height: 20, width: 100 }}
          />
        </CardItem>

        <CardItem>
          <Input
            secureTextEntry
            placeHolder="abc123"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            style={{ height: 20, width: 100 }}
          />
        </CardItem>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardItem>
          {this.renderButton()}
        </CardItem>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
