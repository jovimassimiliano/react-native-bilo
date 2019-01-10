import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const TextField = props => (
  <TextInput
    underlineColorAndroid="transparent"
    {...props}
    style={[
      styles.input,
      props.touched && !props.valid ? styles.invalid : null,
      props.style && props.style
    ]}
    
  />
)

const styles = StyleSheet.create({
  input: {
    borderColor: "#eee",
    width: "100%",
    padding: 5,
    margin: 8,
    borderWidth: 1
  },
  invalid: {
    borderColor: "red"
  }
})

export default TextField;