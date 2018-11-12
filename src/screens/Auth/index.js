import React, { Component } from 'react';

import { View, Text } from 'react-native';
// import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';


class AuthScreen extends Component {

  // signIn = () => {
  //   GoogleSignin.configure({
  //     iosClientId: '990434239938-nhtrjicqvh8a1f21eue103jdnbmhik6k.apps.googleusercontent.com'
  //   }).then(() => {

  //   })
  // }
  render () {
    return(
      <View>
        <Text>
          AuthScreen
        </Text>
      </View>
    )
  }
}

export default AuthScreen;