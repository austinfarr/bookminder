//import libraries
import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';
import Button from './Button';

const BookDetail = ({ record }) => {
  const { title, author, image, url } = record;
  const {
    headerContentStyle,
    headerTextStyle,
    albumCoverStyle,
  } = styles;

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
      <Button
        whenClicked={() => Linking.openURL(url)}
      >
        Check Out {title}
      </Button>
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
    height: 150,
    flex: 1 / 2,
    width: null,
    marginLeft: 10
  }
};

export default BookDetail;
