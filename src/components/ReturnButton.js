import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const ReturnButton = ({ whenClicked, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity
    style={buttonStyle}
    onPress={whenClicked}
    >
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {

    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#ff9b1f',
    borderColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    alignSelf: 'center',
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
};

export default ReturnButton;
