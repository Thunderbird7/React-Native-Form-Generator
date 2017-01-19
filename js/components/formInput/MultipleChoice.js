/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { Container, Content, Button, Icon, List, ListItem, Radio, CheckBox } from 'native-base'
import { Grid, Col, Row } from 'react-native-easy-grid'

let items = []

class MultipleChoice extends Component {

  constructor(props) {
    super(props)
  }

  state = {}

  render() {
    let checkboxComponent = []
    let formPayload = this.props.payload

    items = formPayload.options
    items.forEach((item, i) => {
    checkboxComponent.push(
      <Row key={`${this.props.id}${i}`}
        style={{alignItems: 'center', paddingTop: 10}}>
        <CheckBox
          onPress={() => this.setState({formName: this.props.name, formType: this.props.type, formQuestion: formPayload.question, formAnswer: item})}
          checked={ this.state.formAnswer === item ? true : false } />
        <Text style={{left:10}}>{item}</Text>
      </Row>)
    })

    return (
      <View style={styles.container}>
        <View style={{justifyContent: 'center',}}>
          <Text style={{color: '#212121', fontSize: 15, fontWeight: '500'}}>
            {formPayload.question}
          </Text>
        </View>
          <Grid>
            {checkboxComponent}
          </Grid>
        </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20
  },
});


export default MultipleChoice
