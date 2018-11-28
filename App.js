import React, {Component} from 'react';

import { Navigation } from 'react-native-navigation';
import RegisterNavigation from './src/navigations/registerNavigation';

import AuthScreen from './src/screens/Auth';

RegisterNavigation();

Navigation.startSingleScreenApp({
  screen: {
    screen: 'LoginScreen',
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
