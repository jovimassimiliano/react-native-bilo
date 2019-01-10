import React, { Component } from 'react';

import { LoginButton, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import tabBasedMenu from '../navigations/tabBasedMenu';

class FBLogin extends Component {
  state = {
    userProfile:{}
  }

  requestLogin =  (error, result) => {
    if (error) {
      console.log("login has error: " + result.error);
    } else if (result.isCancelled) {
      console.log("login is cancelled.");
    } else {
      AccessToken.getCurrentAccessToken().then(
        (data) => {
          this.fetchProfile(data.accessToken,this.loginCallback)
        }
      )
    }
  }

  fetchProfile = async (token,callback) => {
    const request = new GraphRequest('/me', {
      accessToken: token,
      parameters: {
        fields: {
          string: 'email, name, first_name, last_name'
        }
      }
    }, callback.bind(this));

    new GraphRequestManager().addRequest(request).start();
  }


  loginCallback = async (error,result) => {
    if(error){
      alert('Sorry something went wrong');
    }else{
      const response = {
        email: result.email,
        first_name: result.first_name,
        last_name: result.last_name,
        name: result.name
      }

      this.setState({
        userProfile: response
      })

      tabBasedMenu();
      // this.props.navigator.push({
      //   screen: 'rnawesome.HomeScreen'
      // });
    }
  }

  render() {
    const { userProfile } = this.state;
    const { style } = this.props;
    return(
      <LoginButton
        style={style}
        readPermissions={['public_profile','email']}
        onLoginFinished={this.requestLogin}
        onLogoutFinished={() => console.log("logout.")}
      />
    )
  }
}

export default FBLogin;