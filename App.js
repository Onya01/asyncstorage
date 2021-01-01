import React, { Component } from 'react'
import { View, Text, Image, TextInput, } from 'react-native/Libraries/NewAppScreen';
import {Button} from 'native-base';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';

//async storage


export default class App extends React.Component {
  storeData = async () => {
  try {
    await AsyncStorage.setItem('@onya', 'caesar')
  } catch (e) {
    // saving error
  }
}
getData = async () => {
  try {
    const value = await AsyncStorage.getItem('@onya')
    if(value !== null) {
      // value previously stored
      alert(value)
    }
  } catch(e) {
    // error reading value
  }
}
  render() {
    return(
      <View>
        <Button onPress={() =>this.getData()} styles={{width: '80%', backgroundColor: 'orange', marginLeft: 20, marginTop: 20, justifyContent: 'center'}}>
          <Text>Click Me</Text>
        </Button>
      </View>
    )
  }
}