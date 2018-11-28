import React from 'react';

import { View, Text, Modal, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PlaceDetail = props => {
  const { placeDetail } = props;

  return(
    <View>
      <View style={style.container}>
        <Image
          style={style.image}
          source={{uri: Object.keys(placeDetail).length > 0  ? placeDetail.image : null}}
        />
        <Text>{Object.keys(placeDetail).length > 0 ? placeDetail.text : null}</Text>
      </View>
      <TouchableOpacity>
        <Icon
          size={30}
          name="ios-trash"
          color="red"
        />
      </TouchableOpacity>
      <Button title="Close"/>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    margin: 22
  },
  image: {
    width: '100%',
    height: 200
  }
})

export default PlaceDetail;