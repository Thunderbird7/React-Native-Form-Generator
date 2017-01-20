/* @flow */

import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import { InputGroup, Input, Icon } from 'native-base'
import { Grid, Col, Row } from 'react-native-easy-grid'

class TextField extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    let formPayload = this.props.payload
    return (
      <View style={styles.container}>   
        <View>
          <Text style={{color: '#212121', fontSize: 15, fontWeight: '500'}}>
            {formPayload.label}
          </Text>
          <InputGroup borderType='underline'>
            <Input placeholder={formPayload.placeholder} onChangeText={ (text)=> this.setState({formName: this.props.name, formType: this.props.type, formQuestion: formPayload.label, formAnswer: text}) } />
          </InputGroup>
        </View>    
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20
  },
})

export default TextField
