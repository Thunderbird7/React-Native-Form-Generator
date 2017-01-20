import React, { Component } from 'react'
import {
  View,
  Text,
  Modal,
  StyleSheet,
  DatePickerIOS,
  TouchableOpacity,
} from 'react-native'
import { Header, Title, Button, InputGroup, Input, Content, Picker, List, ListItem } from 'native-base'
import { Grid, Col, Row } from 'react-native-easy-grid'
import moment from 'moment'

class DatePicker extends Component {

  static defaultProps = {
    date: new Date(),
  }

  state = {
    date: this.props.date,
    pickerVisible: false,
    pickerLabel: 'Select',
  }

  onDateChange(date) {
    this.setState({ date: date, })
  }

  render() {
    console.log(`select date ${this.state.date}`)
    let formPayload = this.props.payload

    return (
      <View style={styles.containter}>
        <List>
          <ListItem itemDivider style={{ left: -5, margin: 5, backgroundColor: 'transparent' }}>
            <Text style={{ left: -12, color: '#212121', fontSize: 15, fontWeight: '500', color: '#212121' }}>
              {formPayload.label}
            </Text>
            <View style={{ justifyContent: 'center', flex: 1 }}>
              <TouchableOpacity onPress={() => this.setState({ pickerVisible: true })} style={{ alignItems: 'flex-end' }}>
                <Text style={{ fontSize: 17, color: 'dimgray' }}>{this.state.pickerLabel}</Text>
              </TouchableOpacity>
            </View>
          </ListItem>
        </List>
        <Modal
          animationType={"fade"}
          transparent={true}
          visible={this.state.pickerVisible} >
          <View style={styles.modal}>
            <View style={styles.datePicker} >
              <DatePickerIOS
                date={this.state.date}
                mode="date"
                maximumDate={this.props.date}
                onDateChange={this.onDateChange.bind(this)} />
              <View style={{ height: 40 }}>
                <Grid>
                  <Col>
                    <TouchableOpacity onPress={() => this.setState({ pickerVisible: false })} style={styles.pickerButton}>
                      <Text style={styles.cancelButtonLabel}>Cancel</Text>
                    </TouchableOpacity>
                  </Col>
                  <Col>
                    <TouchableOpacity onPress={() => this.setState({ pickerLabel: moment(this.state.date).format("MMM DD YYYY"), pickerVisible: false })} style={styles.pickerButton}>
                      <Text style={styles.okButtonLabel}>OK</Text>
                    </TouchableOpacity>
                  </Col>
                </Grid>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containter: {
    flex: 1
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  datePicker: {
    backgroundColor: 'white',
    height: 260,
    justifyContent: 'flex-start',
    borderRadius: 6,
  },
  pickerButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  okButtonLabel: {
    color: 'dodgerblue',
    fontWeight: '500',
    fontSize: 15
  },
  cancelButtonLabel: {
    color: 'red',
    fontWeight: '500',
    fontSize: 15
  },
})

export default DatePicker