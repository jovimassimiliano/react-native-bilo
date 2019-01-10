import React, { Component } from 'react';

import validate from '../../utility/validation';

import { View, Text, StyleSheet, Linking, Platform, Dimensions, ImageBackground, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import tabBasedMenu from '../../navigations/tabBasedMenu';
import FBLogin from '../../components/FBLogin';
import TextField from '../../components/Form/TextField';
import HeadingText from '../../components/HeadingText';
import ButtonWithBackground from '../../components/ButtonWithBackground';


class AuthScreen extends Component {
  state = {
    signInForm: false,
    signUpForm: false,
    viewMode: Dimensions.get('window').height > 500 ? "portrait" : "landscape",
    controls: {
      email: {
        value: "",
        valid: false,
        validationRules: {
          isEmail: true
        },
        touched:false
      },
      password: {
        value: "",
        valid: false,
        validationRules: {
          minLength: 6
        },
        touched:false
      },
      confirmPassword: {
        value: "",
        valid: false,
        validationRules: {
          equalTo: "password"
        },
        touched:false
      }
    }
  }

  constructor(props){
    super(props);

    Dimensions.addEventListener('change', this.updateStyles );
  }
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
    Dimensions.removeEventListener('change', this.updateStyles);
  }

  updateStyles = () => {
    this.setState({
      viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape"
    })
  }

  handleOpenURL = (e) => {
    console.log('hoi');
    console.log('tai',e);
  }

  signIn = async () => {
    GoogleSignin.configure({
      webClientId:'990434239938-9a02v60r61l2hcf68np3acotqkhcmiq8.apps.googleusercontent.com',
      iosClientId: '990434239938-i2j64etfua408krcrlpokkcej1i0qq8u.apps.googleusercontent.com'
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

  showSignInField = () => {
    const { signInForm } = this.state;

    this.setState({
      signInForm: !signInForm
    });
  }

  handleChangeText = (key,val) => {
    const { controls } = this.state;
    const rules = controls[key].validationRules;

    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          [key] : {
            ...prevState.controls[key],
            value: val,
            valid: validate(val,rules),
            touched: true
          }
        }
      }
    })
  }

  goToHomeScreen = () => {
    tabBasedMenu()
    // this.props.navigator.push({ screen: 'rnawesome.HomeScreen'});
  }
  render () {
    const { signInForm, controls } = this.state;

    return(
      <ImageBackground style={styles.backgroundImage}>
      <KeyboardAvoidingView
        behaviour="padding"
        style={styles.wrapper}
      >
        <View style={styles.container}>
          <HeadingText>Sign In</HeadingText>
          { !signInForm && (
              <React.Fragment>
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
              </React.Fragment>
            )
          }
          {
            signInForm && (
              <React.Fragment>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                  <View>
                    <TextField
                      autoCapitalize="none"
                      placeholder="Email address"
                      value={controls.email.value}
                      valid={controls.email.valid}
                      touched={controls.email.touched}
                      onChangeText={(val) => this.handleChangeText('email', val)}
                      keyboardType="email-address"
                    />
                  
                    <TextField
                      autoCapitalize="none"
                      placeholder="Password"
                      textContentType="password"
                      secureTextEntry={true}
                      value={controls.password.value}
                      valid={controls.password.valid}
                      touched={controls.password.touched}
                      onChangeText={(val) => this.handleChangeText('password', val)}
                    />
                  </View>
                </TouchableWithoutFeedback>
              </React.Fragment>
            )
          }

          {
            signInForm && 
              <ButtonWithBackground
                color="#39A0FF"
                disabled={
                  !controls.email.valid ||
                  !controls.password.valid
                }
                onPress={this.goToHomeScreen}
              >
                <Text>Login</Text>
              </ButtonWithBackground>
          }
          
          
          <ButtonWithBackground
            color="#39A0FF"
            onPress={this.showSignInField}
          >
            { signInForm ?
               <Text>Cancel</Text> :
               <Text>Login With News Account</Text>
               
            }
          </ButtonWithBackground>
        </View>
      </KeyboardAvoidingView>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  backgroundImage: {
    width: '100%',
    flex: 1
  },
  container: {
    width: 300,
    alignItems: "center",
    justifyContent: "center"
  },
  authButton: {
    width: '100%',
    height: 50
  }
})

export default AuthScreen;