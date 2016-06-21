import React, {Component, PropTypes} from 'react'
import {observer} from 'mobx-react'
import {InputField, asForm} from '../../components'

@observer
class PersonAddress extends Component {
  render () {
    const {address, updateProperty} = this.props
    return (
      <div>
        <InputField id="address-city" name="city" value={address.city} onChange={updateProperty}/>
        <InputField id="address-postal-code" name="postalCode" value={address.postalCode} onChange={updateProperty}/>
        <InputField id="address-street" name="street" value={address.street} onChange={updateProperty}/>
      </div>
    )
  }
}

PersonAddress.propTypes = {
  address: PropTypes.shape({
    city: PropTypes.string,
    postalCode: PropTypes.string,
    street: PropTypes.string
  })
}

export default asForm(PersonAddress, 'address')
