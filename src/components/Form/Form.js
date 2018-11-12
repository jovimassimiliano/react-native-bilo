import React, { Component } from 'react';

import { View, StyleSheet, Button } from 'react-native';

import TextField from '../TextField';

class PlaceForm extends Component {
  handleChangeText = (text) => {
    this.props.handleText(text);
  }

  render () {
    const { text } = this.props;
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
          onPress={() => this.props.onSubmit()}
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

export default PlaceForm;