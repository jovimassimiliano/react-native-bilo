import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addNews } from '../../store/Places/actions';

import { View, StyleSheet, Button, Text, ScrollView } from 'react-native';
import TextField from '../../components/Form/TextField';
import LocationPicker from '../../components/Form/LocationPicker';
import PickerImage from '../../components/Form/PickerImage';

class NewsForm extends Component {
  state = {
    text: '',
    image: ''
  }

  handleChangeText = (text) => {
    this.setState({
      text
    });
  }

  handleChangeImage = (uri) => {
    this.setState(prevState => ({
        ...prevState,
        image: uri
      })
    )
  }

  handleSubmit = () => {
    const { text, image } = this.state;

    let submittedValue = {};

    if(text !== ''){
      submittedValue = {
        text,
        image
      }
      this.props.addNews(submittedValue);

      this.setState({
        text: '',
        image: ''
      })
    }
    
  }

  render () {
    const { text } = this.state;

    return(
      <ScrollView>
        <View style={styles.container}>
          <Text>Share a News with us!</Text>
          <PickerImage handleImagePicker={this.handleChangeImage}/>
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