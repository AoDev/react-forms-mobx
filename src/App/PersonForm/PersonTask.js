import React, {Component, PropTypes} from 'react'
import {observer} from 'mobx-react'
import {InputField, asForm} from '../../components'

@observer
class PersonTask extends Component {
  render () {
    const {task, updateProperty} = this.props
    return (
      <div>
        <InputField id={`task-name-${task.id}`} name="name" value={task.name} onChange={updateProperty}/>
        <InputField id={`task-duedate-${task.id}`} name="dueDate" value={task.dueDate} onChange={updateProperty}/>
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

export default asForm(PersonTask, 'task')
