//import libraries
import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';
import Button from './Button';

const BookDetail = ({ record }) => {
  const { title, author, image, url, checkedOutBy } = record;
  const {
    headerContentStyle,
    headerTextStyle,
    albumCoverStyle,
    notAvailableStyle,
    notAvailableViewStyle
  } = styles;

  let action = '';
  if (checkedOutBy === '') {
    action = (<Button whenClicked={() => Linking.openURL(url)}>
      {`Check out ${title}`}
    </Button>);
  } else {
    action = (
      <View style={notAvailableViewStyle}>
        <Text style={notAvailableStyle}>Not available</Text>
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
    justifyContent: 'space-around',
    paddingLeft: 10
  },
  headerTextStyle: {
    fontSize: 18,
    paddingLeft: 10
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
