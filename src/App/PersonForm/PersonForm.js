import React, {Component, PropTypes} from 'react'
import {observer} from 'mobx-react'
import PersonInfo from './PersonInfo'
import PersonAddress from './PersonAddress'
import PersonTask from './PersonTask'

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
    const {person, submitForm} = this.props
    return (
      <div>
        <h1>My Person Form</h1>
        <form onSubmit={submitForm}>
          <div className="row">
            <div className="col-sm-6">
              <fieldset>
                <legend>General info</legend>
                <PersonInfo person={person} />
              </fieldset>
            </div>
            <div className="col-sm-6">
              <fieldset>
                <legend>Address</legend>
                <PersonAddress address={person.address} />
              </fieldset>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
            <fieldset>
            <legend>Tasks</legend>
            {
              person.tasks
                .map((task) => <PersonTask key={task.id} task={task} />)
            }
            </fieldset>
            </div>
            <div className="col-sm-6">
              <h2>Send updated data</h2>
              <p>(check the console)</p>
              <button className="btn btn-primary" type="submit">Submit form</button>
            </div>
          </div>
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
