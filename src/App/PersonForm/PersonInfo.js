import React, {Component, PropTypes} from 'react'
import {observer} from 'mobx-react'
import {InputField, InputRadio, InputCheckbox, InputCheckboxes, asForm} from '../../components'

const sexes = ['female', 'male']
const mascots = ['bird', 'cat', 'dog', 'iguana', 'pig', 'other']

@observer
class PersonInfo extends Component {
  render () {
    const {person, updateProperty, updateArray} = this.props
    return (
      <div>
        <InputField id="fullname" name="fullName" value={person.fullName} onChange={updateProperty}/>
        <InputField id="job" name="job" value={person.job} onChange={updateProperty}/>
        <InputField id="email" name="email" value={person.email} onChange={updateProperty}/>
        <InputRadio items={sexes} name="sex" value={person.sex} onChange={updateProperty}/>
        <InputCheckbox id="alive" name="alive" value={person.alive} onChange={updateProperty}/>
        <InputCheckboxes items={mascots} name="mascots" checkedItems={person.mascots} onChange={updateArray}/>
      </div>
    )
  }
}

PersonInfo.propTypes = {
  info: PropTypes.shape({
    fullName: PropTypes.string,
    job: PropTypes.string,
    email: PropTypes.string
  })
}

export default asForm(PersonInfo, 'person')
