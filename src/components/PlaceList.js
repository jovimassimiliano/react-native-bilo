import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';

const PlaceList = (props) => {
  const { places } = props;
  
  return(
    <FlatList
      data={places}
      keyExtractor={(item,index) => item.id}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => props.onItemSelected(item.id)}>
          <View style={styles.wrapper}>
            <Image
              style={styles.imageWrapper}
              source={{uri: item.image}}
            />
            <Text>{item.text}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#eee',
    width: '100%',
    marginBottom: 10,
    flexDirection: 'row',
    alignContent: 'center'
  },
  item: {
    backgroundColor: '#eee',
    width: '100%',
    marginBottom: 10
  },
  imageWrapper: {
    width: 50,
    height: 50
  }
})

export default PlaceList;