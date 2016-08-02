'use strict'

import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'

import Profile from '../../../components/profile'

class InkAndWater extends Component {
  render () {
    return (
      <DocumentTitle title='Ink And Water, Sheffield | CoffeeHouses'>
        <Profile
          name='Ink And Water'
          city='Sheffield'
          image='sheffield/ink.jpg' />
      </DocumentTitle>
    )
  }
}

export default InkAndWater
