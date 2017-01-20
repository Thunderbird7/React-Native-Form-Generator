import React, { component } from 'react'
import Choice from './components/formInput/Choice'
import MultipleChoice from './components/formInput/MultipleChoice'
import TextField from './components/formInput/Textfield'
import Picker from './components/formInput/Picker'
import InputGroup from './components/formInput/InputGroup'
import DatePicker from './components/formInput/DatePicker'

export default formGeneratorComponents = (data) => {
  let components = []
  data.forEach( (input, i) => {

    switch (input.type) {
      case 'choice':
        components.push(
          <Choice
            key={i}
            id={i}
            type={input.type}
            name={input.name}
            payload={input.payload} />)
        break
      case 'multiple-choice':
        components.push(
          <MultipleChoice
            key={i}
            id={i}
            type={input.type}
            name={input.name}
            payload={input.payload} />)
        break
      case 'textfield':
        components.push(
          <TextField
            key={i}
            id={i}
            type={input.type}
            name={input.name}
            payload={input.payload} />)
        break
      case 'picker':
        components.push(
          <Picker
            key={i}
            id={i}
            type={input.type}
            name={input.name}
            payload={input.payload} />)
        break
      case 'date-picker':
        components.push(
          <DatePicker
            key={i}
            id={i}
            type={input.type}
            name={input.name}
            payload={input.payload} />)
        break
      case 'input-group':
        components.push(
          <InputGroup
            key={i}
            id={i}
            type={input.type}
            name={input.name}
            payload={input.payload} />)
        break
      default:
    }
  })

  return components
}
