import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View, StyleSheet, TouchableOpacity, Text, Animated } from 'react-native';
import PlaceList from '../../components/PlaceList';

class Home extends Component {
  static navigatorStyle = {
    navBarButtonColor: "orange"
  }

  state = {
    placesLoaded: false,
    removeAnimation: new Animated.Value(1)
  }

  constructor(props){
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent)
  }

  onNavigatorEvent = event => {
    if (event.type === "NavBarButtonPress") {
      if(event.id === "sideDrawerToggle") {
        this.props.navigator.toggleDrawer({
          side: "left"
        });
      }
    }
  }

  handleFindPlace = () => {
    Animated.timing(this.state.removeAnimation,{
      toValue: 0,
      duration: 500,
      useNativeDriver: true
    }).start();

    // this.setState({
    //   placesLoaded: true
    // })
  }

  handleSelectedItem = id => {
    const { places } = this.props;
    const selectedPlace = places.find(place => place.id === id);
    
    this.props.navigator.push({
      screen: 'rnawesome.DetailScreen',
      title: selectedPlace.text,
      passProps: {
        placeDetail: selectedPlace
      }
    });
  }

  render () {
    const { places } = this.props;
    const { placesLoaded, removeAnimation } = this.state;

    let content = (
      <Animated.View
        style={{
          opacity: removeAnimation,
          transform: [
            {
              scale: removeAnimation.interpolate({
                inputRange: [0,1],
                outputRange: [5,1]
              })
            }
          ]
        }}
      >
        <TouchableOpacity
          onPress={this.handleFindPlace}
          style={styles.buttonContainer}>
          <Text>Find Place</Text>
        </TouchableOpacity>
      </Animated.View>
    )

    if(placesLoaded) {
      content = (
        <PlaceList
          places={places}
          onItemSelected={this.handleSelectedItem}
        />
      )
    }

    return(
      <View style={placesLoaded ? null : styles.container }>
        {content}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    // flex:1,
    borderColor: 'orange',
    borderRadius: 20,
    borderWidth: 2,
    padding: 10
  },
  container: {
    flex:1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const mapStateToProps = state => {
  return{
    places: state.places.places
  }
}


export default connect(mapStateToProps)(Home);