import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addNews } from '../../store/Places/actions';

import { View, StyleSheet, Button } from 'react-native';
import TextField from '../TextField';

class PlaceForm extends Component {
  state = {
    text: ''
  }

  handleChangeText = (text) => {
    this.setState({
      text
    });
  }

  handleSubmit = () => {
    const { text } = this.state;

    if(text !== ''){
      this.props.addNews(text)

      this.setState({
        text: ''
      })
    }
    
  }

  render () {
    const { text } = this.state;

    return(
      <View style={styles.inputWrapper}>
        <TextField
          style={styles.input}
          placeholder="Place name"
          onChangeText={this.handleChangeText}
          value={text}
        />
        <Button
          style={styles.button}
          title="Add"
          onPress={this.handleSubmit}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between'
  },
  input: {
    width: '70%'
  },
  button: {
    width: '30%'
  },
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addNews
}, dispatch)

export default connect(null,mapDispatchToProps)(PlaceForm);