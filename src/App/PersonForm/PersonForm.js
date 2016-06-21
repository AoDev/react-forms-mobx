import React, {Component, PropTypes} from 'react'
import {observer} from 'mobx-react'

@observer
export default class PersonForm extends Component {
  constructor (props) {
    super(props)
    this.updateProperty = this.updateProperty.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  updateProperty (key, value) {
    this.props.person[key] = value
  }

  onChange (event) {
    this.updateProperty(event.target.name, event.target.value)
  }

  render () {
    const {person} = this.props
    return (
      <div>
        <h1>My Person Form</h1>
        <form>
          <input type="text" name="fullName" value={person.fullName} onChange={this.onChange}/>
        </form>
      </div>
    )
  }
}

PersonForm.propTypes = {
  person: PropTypes.shape({
    fullName: PropTypes.string
  })
}
