//import libraries
import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';
import Button from './Button';
import ReturnButton from './ReturnButton'

const BookDetail = ({ record, onCheckOut, email, onReturn }) => {
  const { title, author, image, checkedOutBy } = record;
  const {
    headerContentStyle,
    headerTextStyle,
    albumCoverStyle,
    notAvailableStyle,
    notAvailableViewStyle,
    dueDateStyle
  } = styles;

  let action = '';
  let willShowDueDate;
  if (checkedOutBy === '') {
    action = (
      <Button whenClicked={() => onCheckOut(record)}>
      {`Check out ${title}`}
    </Button>);
  } else if (checkedOutBy !== email) {
    action = (
      <View style={notAvailableViewStyle}>
        <Text style={notAvailableStyle}>Not available</Text>
      </View>
      );
  } else {
    action = (
      <View style={notAvailableViewStyle}>
      <ReturnButton whenClicked={() => onReturn(record)} >
        {`Return ${title}`}
      </ReturnButton>
      </View>
      );
  }

  if (checkedOutBy === email) {
      willShowDueDate = (
        <Text style={dueDateStyle}>Due by {(new Date(record.dueDate)).toDateString()}</Text>
      );
  }
  return (
    <Card>
    <CardItem>
      <Image
        style={albumCoverStyle}
        source={{ uri: image }}
      />
      <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{author}</Text>
          {willShowDueDate}
      </View>
    </CardItem>

    <CardItem>
      {action}
    </CardItem>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 20,
    flex: 1
  },
  headerTextStyle: {
    fontSize: 20,
    flexWrap: 'wrap',
    fontFamily: 'Heiti SC'
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    borderRadius: 5
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  albumCoverStyle: {
    height: 150,
    //flex: 1 / 2,
    width: 100,
    marginLeft: 10
  },
  notAvailableStyle: {
    alignSelf: 'center',
    color: '#999999',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  notAvailableViewStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    marginLeft: 5,
    marginRight: 5,
    borderColor: '#4dff88'
  },
  dueDateStyle: {
    paddingTop: 10,
    textDecorationLine: 'underline'
  }
};

export default BookDetail;
