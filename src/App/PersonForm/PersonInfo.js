import React, {Component, PropTypes} from 'react'
import {observer} from 'mobx-react'
import {InputField, asForm} from '../../components'

@observer
class PersonInfo extends Component {
  render () {
    const {person, updateProperty} = this.props
    return (
      <div>
        <InputField id="fullname" name="fullName" value={person.fullName} onChange={updateProperty}/>
        <InputField id="job" name="job" value={person.job} onChange={updateProperty}/>
        <InputField id="email" name="email" value={person.email} onChange={updateProperty}/>
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
