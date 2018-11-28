import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View } from 'react-native';
import PlaceList from '../../components/PlaceList';
import NewsForm from '../../components/Form/Form';

class Home extends Component {
  
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

    return(
      <View>
        <NewsForm/>
        <PlaceList
          places={places}
          onItemSelected={this.handleSelectedItem}
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return{
    places: state.places.places
  }
}


export default connect(mapStateToProps)(Home);