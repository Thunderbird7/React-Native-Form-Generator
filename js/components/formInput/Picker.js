/* @flow */

import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import { Header, Title, Button, InputGroup, Input, Content, Picker, List, ListItem } from 'native-base'
import { Grid, Col, Row } from 'react-native-easy-grid'

const Item = Picker.Item

class Dropdown extends Component {

  state = {
    formName: `${this.props.name}`,
    formType: `${this.props.type}`,
    formQuestion: `${this.props.payload.label}`,
    formAnswer: `${this.props.payload.options[0]}`,
    selectedValue: `${this.props.payload.options[0]}`,
  }

  constructor(props) {
    super(props)
  }

  render() {
    let formPayload = this.props.payload
    return (
      <View style={styles.container}>
          <List>
              <ListItem itemDivider style={{left: -5, margin: 5, backgroundColor: 'transparent'}}>
                <Text style={{left: -12, color: '#212121', fontSize: 15, fontWeight: '500', color: '#212121'}}>
                  {formPayload.label}
                </Text>
                <Picker
                  headerComponent={
                      <Header>
                          <Button transparent>
                              Cancel
                          </Button>
                          <Title>{formPayload.label}</Title>
                      </Header>
                    }
                    mode="dialog"
                    selectedValue={this.state.selectedValue}
                    onValueChange={this.onValueChange.bind(this)}>
                    {formPayload.options.map((item, i) => <Item key={`${this.props.id}${i}`} label={item} value={`${item}`} />)}
                </Picker>
              </ListItem>
          </List>
      </View>
    );
  }

  onValueChange (value) {
    this.setState({
      selectedValue : value,
      formAnswer: value
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20
  },
});

export default Dropdown
