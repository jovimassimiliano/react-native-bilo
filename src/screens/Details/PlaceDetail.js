import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteNews } from '../../store/Places/actions';

import { View, Text, Modal, StyleSheet, Image, Button, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { bindActionCreators } from 'redux';

class PlaceDetail extends Component {
  static navigatorStyle = {
    navBarButtonColor: 'orange'
  }
  handleDeleteNews = () => {
    const { placeDetail } = this.props;

    this.props.deleteNews(placeDetail.id);
    this.props.navigator.pop();
  }
  render () {
    const { placeDetail } = this.props;
    
    return(
      <View style={style.wrapper}>
        <View style={style.container}>
          <Image
            style={style.image}
            source={{uri: Object.keys(placeDetail).length > 0  ? placeDetail.image : null}}
          />
          <Text>{Object.keys(placeDetail).length > 0 ? placeDetail.text : null}</Text>
        </View>
        <View style={style.container}>
          <TouchableOpacity onPress={this.handleDeleteNews}>
            <Icon
              size={30}
              name="ios-trash"
              color="red"
            />
          </TouchableOpacity>
          <Button onPress={null} title="Close"/>
        </View>
        
      </View>
    )
  }
}

const style = StyleSheet.create({
  wrapper: {
    margin: 22,
    flex:1,
    alignContent: 'center'
  },
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: 200
  }
})

const mapDispatchToProps = dispatch => bindActionCreators({
  deleteNews
}, dispatch)

export default connect(null,mapDispatchToProps)(PlaceDetail);