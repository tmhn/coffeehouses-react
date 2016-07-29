'use strict'

import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import Profile from '../../../pages/components/profile'

class InkAndWater extends Component {
  render () {
    return (
      <DocumentTitle title='Ink And Water, Sheffield | CoffeeHouses'>
        <Profile
          name='Ink And Water' />
      </DocumentTitle>
    )
  }
}

export default InkAndWater
