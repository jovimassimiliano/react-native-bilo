import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Platform, TouchableNativeFeedback } from 'react-native';

const buttonWithBackground = props => {
  if(Platform.OS === 'android'){
    return(
      <TouchableNativeFeedback onPress={props.onPress}>
        <View style={[styles.button, { backgroundColor: props.color }]}>
          <Text>{props.children}</Text>
        </View>
      </TouchableNativeFeedback>
    )
  }

  return(
    <TouchableOpacity onPress={props.onPress}>
      <View style={[
        styles.button,
        { backgroundColor: props.color },
        props.disabled ? styles.disabled : null
      ]}>
        <Text
          style={props.disabled ? styles.textDisabled : null}
        >
          {props.children}
        </Text>
      </View>
    </TouchableOpacity>
  )
  
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 5,
    borderColor: "transparent",
    borderRadius: 5
  },
  disabled: {
    backgroundColor: "#eee",
    color: "#aaa"
  },
  textDisabled: {
    color: "#aaa"
  }
})

export default buttonWithBackground;