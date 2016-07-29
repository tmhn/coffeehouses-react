'use strict'

import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import Profile from '../../../pages/components/profile'

class OzoneCoffee extends Component {
  render () {
    return (
      <DocumentTitle title='Ozone Coffee, London | CoffeeHouses'>
        <Profile
          name='Ozone Coffee' />
      </DocumentTitle>
    )
  }
}

export default OzoneCoffee
