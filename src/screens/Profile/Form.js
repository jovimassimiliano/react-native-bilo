import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addNews } from '../../store/Places/actions';

import { View, StyleSheet, Button, Text, ScrollView } from 'react-native';
import TextField from '../../components/Form/TextField';
import ImagePicker from '../../components/Form/ImagePicker';
import LocationPicker from '../../components/Form/LocationPicker';

class NewsForm extends Component {
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
      <ScrollView>
        <View style={styles.container}>
          <Text>Share a News with us!</Text>
          <ImagePicker/>
          <LocationPicker/>
          <TextField
            style={styles.input}
            placeholder="Place name"
            onChangeText={this.handleChangeText}
            value={text}
          />
          <View style={styles.buttonWrapper}>
            <Button
              style={styles.button}
              title="Add"
              onPress={this.handleSubmit}
            />
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    width: "80%",
    height: 150
  },
  input: {
    width: '100%'
  },
  buttonWrapper: {
    margin: 5
  },
  button: {
    width: '30%'
  }
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addNews
}, dispatch)

export default connect(null,mapDispatchToProps)(NewsForm);