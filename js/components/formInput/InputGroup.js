/* @flow */

import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'


import Choice from './Choice'
import MultipleChoice from './MultipleChoice'
import TextField from './Textfield'
import Picker from './Picker'
import formGenerator from '../../formGenerator'

export default class InputGroup extends Component {

  render() {
    let payload = this.props.payload
    let forms = payload.forms
    let generateComponent = formGenerator(forms)

    return (
      <View style={styles.container}>
        <Text style={{color: '#212121', fontSize: 18, fontWeight: '500', marginBottom: 5}}>
          {payload.title}
        </Text>
        <Text style={{color: '#212121', fontSize: 14, color: '#BDBDBD', marginBottom: 20}}>
          {payload.subTitle}
        </Text>
        {generateComponent}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F5F5F5',
    marginBottom: 20,
  },
});
