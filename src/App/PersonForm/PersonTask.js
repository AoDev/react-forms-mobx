import React, {Component, PropTypes} from 'react'
import {observer} from 'mobx-react'
import {InputField} from '../../components'

@observer
export default class PersonTask extends Component {
  constructor (props) {
    super(props)
    this.updateProperty = this.updateProperty.bind(this)
  }

  updateProperty (key, value) {
    this.props.task[key] = value
  }

  render () {
    const {task, updateProperty} = this.props
    return (
      <div>
        <InputField id={`task-name-${task.id}`} name="name" value={task.name} onChange={this.updateProperty}/>
        <InputField id={`task-duedate-${task.id}`} name="dueDate" value={task.dueDate} onChange={this.updateProperty}/>
      </div>
    )
  }
}

PersonTask.propTypes = {
  task: PropTypes.shape({
    name: PropTypes.string,
    dueDate: PropTypes.string
  })
}
