import React, { Component } from 'react';
import { View } from 'react-native';

import PlaceList from '../../components/PlaceList';

class Detail extends Component {
  
  render() {
    const { selectedPlace } = this.props;

    return(
      <View>
        <PlaceList
          selectedPlace={selectedPlace}
        />
      </View>
    )
  }
}

export default Detail;