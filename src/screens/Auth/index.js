import React, { Component } from 'react';

import { View, Text, StyleSheet, Linking, Platform } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import tabBasedMenu from '../../navigations/tabBasedMenu';
import FBLogin from '../../components/FBLogin';

class AuthScreen extends Component {
  componentDidMount() {
    if(Platform.OS === 'android'){
      Linking.getInitialURL().then(url => {
        this.handleOpenURL(url)
      })
    }
    else{
      Linking.addEventListener('url', this.handleOpenURL);
    }
    
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleOpenURL);
  }

  handleOpenURL = (e) => {
    console.log('hoi');
    console.log('tai',e);
  }

  signIn = async () => {
    GoogleSignin.configure({
      webClientId:'990434239938-9a02v60r61l2hcf68np3acotqkhcmiq8.apps.googleusercontent.com',
      iosClientId: '990434239938-nhtrjicqvh8a1f21eue103jdnbmhik6k.apps.googleusercontent.com'
    });
      try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();

        alert('hi', userInfo)
        tabBasedMenu();
        // this.setState({ userInfo });
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          // user cancelled the login flow
        } else if (error.code === statusCodes.IN_PROGRESS) {
          // operation (f.e. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          // play services not available or outdated
        } else {
          // some other error happened
        }
      }
  }
  render () {
    return(
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <GoogleSigninButton
            style={styles.authButton}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Light}
            onPress={this.signIn}
            // disabled={this.state.isSigninInProgress}
          />
          <FBLogin
            style={styles.authButton}
          />
        </View>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  container: {
    width: 300,
    justifyContent: "center"
  },
  authButton: {
    width: '100%',
    height: 50
  }
})

export default AuthScreen;