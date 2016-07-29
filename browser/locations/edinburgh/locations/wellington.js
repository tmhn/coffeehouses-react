'use strict'

import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import Profile from '../../../pages/components/profile'

class WellingtonCoffee extends Component {
  render () {
    return (
      <DocumentTitle title='Wellington Coffee, Edinburgh | CoffeeHouses'>
        <Profile
          name='Wellington Coffee' />
      </DocumentTitle>
    )
  }
}

export default WellingtonCoffee
