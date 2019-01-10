import React, { Component } from 'react';

import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class SideDrawer extends Component {
  render() {
    return(
      <View
        style={
          [
            styles.container,{ width: Dimensions.get("window").width * 0.8 }
          ]
        }
      >
        <Text style={{ marginBottom: 10, fontWeight: 'bold', fontSize: 20}}>Menu</Text>
        <TouchableOpacity
          onPress={() => alert('Logout')}
        > 
          <View style={styles.menuItem}>
            <Icon
              name={Platform.OS === 'android' ? 'md-exit' : 'ios-exit'}
              color="red"
              size={30}
              style={styles.menuIcon}
            />
            <Text>Sign Out</Text>
          </View>
          
          
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 22,
    paddingLeft: 22,
    backgroundColor: "white",
    flex: 1
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  menuIcon: {
    marginRight: 5
  }
});

export default SideDrawer;