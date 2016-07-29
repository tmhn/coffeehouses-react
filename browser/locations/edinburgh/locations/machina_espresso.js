'use strict'

import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import Profile from '../../../pages/components/profile'

class MachinaEspresso extends Component {
  render () {
    return (
      <DocumentTitle title='Machina Espresso, Edinburgh | CoffeeHouses'>
        <Profile
          name='Machina Espresso' />
      </DocumentTitle>
    )
  }
}

export default MachinaEspresso
