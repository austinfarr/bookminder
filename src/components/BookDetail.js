//import libraries
import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';
import Button from './Button';

const BookDetail = ({ record, onCheckOut, email }) => {
  const { title, author, image, checkedOutBy } = record;
  const {
    headerContentStyle,
    headerTextStyle,
    albumCoverStyle,
    notAvailableStyle,
    notAvailableViewStyle
  } = styles;

  let action = '';
  if (checkedOutBy === '') {
    action = (<Button whenClicked={() => onCheckOut(record)}>
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
        <Text style={notAvailableStyle}> Due by {(new Date(record.dueDate)).toDateString()}</Text>
      </View>
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
    height: 225,
    //flex: 1 / 2,
    width: 150,
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
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#999999',
    marginLeft: 5,
    marginRight: 5
  }
};

export default BookDetail;
