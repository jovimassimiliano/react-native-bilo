import React, {Component} from 'react';

import { Navigation } from 'react-native-navigation';

import AuthScreen from './src/screens/Auth';

// import { Platform, StyleSheet, Text, View, Button } from 'react-native';
// import PlaceList from './src/components/PlaceList';
// import TextField from './src/components/TextField';
// import PlaceForm from './src/components/Form/Form';
// import PlaceDetail from './src/components/PlaceDetail';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

Navigation.registerComponent('rnawesome.LoginScreen', () => AuthScreen);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'rnawesome.LoginScreen',
    title: 'Sign In'
  }
})


// export default class App extends Component {
//   state = {
//     text:'',
//     places: [],
//     placeDetail: {}
//   }

//   handleChangeText = (text) => {
//     this.setState({
//       text
//     })
//   }

//   handleSubmit = () => {
//     const { text } = this.state;

//     if(text.trim() === ''){
//       return;
//     }
//     this.setState(prevState => {
//       return{
//         places: prevState.places.concat({
//           id: prevState.places.length + 1,
//           image: 'https://source.unsplash.com/random/600x400',
//           text,
//         }),
//         text: ''
//       }
//     });
//   }

//   handleSelected = (id) => {
//     const { places } = this.state;

//     this.setState(prevState => {
//       return{
//         // places: prevState.places.filter((place,i) => id !== place.id)
//         placeDetail: prevState.places.find((place) => place.id === id)
//       }
//     })
//   }

//   render() {
//     const { text, places, placeDetail } = this.state;
    
//     return (
//       <View style={styles.container}>
//         <PlaceDetail
//           placeDetail={placeDetail}
//         />

//         <PlaceForm
//           handleText={this.handleChangeText}
//           onSubmit={this.handleSubmit}
//           text={text}
//         />
        
//         <View style={styles.placeList}>
//           <PlaceList places={places} onItemSelected={this.handleSelected}/>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding:20,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   inputWrapper: {
//     width: '100%',
//     flexDirection: 'row',
//     alignContent: 'center',
//     justifyContent: 'space-between'
//   },
//   input: {
//     width: '70%'
//   },
//   button: {
//     width: '30%'
//   },
//   placeList: {
//     width: '100%'
//   }
// });
