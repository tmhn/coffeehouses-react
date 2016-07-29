'use strict'

import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import Profile from '../../../pages/components/profile'

class BrewLab extends Component {
  render () {
    return (
      <DocumentTitle title='Brew Lab, Edinburgh | CoffeeHouses'>
        <Profile
          name='Brew Lab' />
      </DocumentTitle>
    )
  }
}

export default BrewLab
