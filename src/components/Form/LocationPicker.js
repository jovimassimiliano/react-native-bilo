import React, { Component } from 'react';

import { View, Image, StyleSheet, Text, Button } from 'react-native';

class LocationPicker extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Text>Map</Text>
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            style={styles.button}
            title="Locate Me"
            onPress={() => alert('Pick Location')}
          />
        </View>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems:"center"
  },
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    width: "80%",
    height: 150
  },
  buttonWrapper: {
    margin: 5
  },
  button: {
    width: '30%'
  }
})

export default LocationPicker;