'use strict'

import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import Profile from '../../../pages/components/profile'

class FortitudeCoffee extends Component {
  render () {
    return (
      <DocumentTitle title='Fortitude Coffee, Edinburgh | CoffeeHouses'>
        <Profile
          name='Fortitude Coffee' />
      </DocumentTitle>
    )
  }
}

export default FortitudeCoffee
