import React, {Component, PropTypes} from 'react'
import {observer} from 'mobx-react'
import PersonAddress from './PersonAddress'
import PersonTask from './PersonTask'
import {InputField} from '../../components'

@observer
export default class PersonForm extends Component {
  constructor (props) {
    super(props)
    this.updateProperty = this.updateProperty.bind(this)
  }

  updateProperty (key, value) {
    this.props.person[key] = value
  }

  render () {
    const {person} = this.props
    return (
      <div>
        <h1>My Person Form</h1>
        <form>
          <InputField name="fullName" value={person.fullName} onChange={this.updateProperty}/>
          <InputField name="job" value={person.job} onChange={this.updateProperty}/>
          <InputField name="email" value={person.email} onChange={this.updateProperty}/>

          <PersonAddress address={person.address} />
          {
            person.tasks
              .map((task) => <PersonTask key={task.id} task={task} />)
          }
        </form>
      </div>
    )
  }
}

PersonForm.propTypes = {
  person: PropTypes.shape({
    fullName: PropTypes.string,
    job: PropTypes.string,
    email: PropTypes.string
  })
}
