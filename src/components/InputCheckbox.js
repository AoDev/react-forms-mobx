import React, {Component, PropTypes} from 'react'
import {observer} from 'mobx-react'

@observer
export default class InputCheckbox extends Component {
  constructor (props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange (event) {
    this.props.onChange(this.props.name, event.target.checked)
  }

  render () {
    const {name, value, id} = this.props
    return (
      <div className="checkbox">
        <label htmlFor={id}>
          <input type="checkbox" name={name} id={id}
              checked={value} onChange={this.onChange}/> {name}
        </label>
      </div>
    )
  }
}

InputCheckbox.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
}
