import React, { Component } from 'react';

import { View, Image, StyleSheet, Text, Button, Modal } from 'react-native';
import MapView from 'react-native-maps';

class LocationPicker extends Component {
  state = {
    showMap: false
  }
  handleShowMaps = () => {
    const { showMap } = this.state;

    this.setState({
      showMap: !showMap
    })
  }

  renderMaps = () => {
    return(
      <MapView
         style={{flex: 1}}
         region={{
           latitude: 42.882004,
           longitude: 74.582748,
           latitudeDelta: 0.0922,
           longitudeDelta: 0.0421
         }}
         showsUserLocation={true}
       />
    )
  }
  render() {
    const { showMap } = this.state;

    return (
      <View style={styles.container}>
        <Modal
          visible={showMap}
          animationType="slide"
          transparent={false}
          onRequestClose={this.handleShowMaps}
        >
          {this.renderMaps()}
        </Modal>
        <View style={styles.placeholder}>
          <Text>Map</Text>
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            style={styles.button}
            title="Locate Me"
            onPress={this.handleShowMaps}
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