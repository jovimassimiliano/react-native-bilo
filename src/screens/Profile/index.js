import React, { Component } from 'react';

import { View, Text } from 'react-native';
import NewsForm from './Form';

class Profile extends Component {
  static navigatorStyle = {
    navBarButtonColor: 'orange'
  }
  render () {
    return(
      <View>
        <NewsForm/>
      </View>
    )
  }
}

export default Profile;