'use strict'

import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'

// Components
import Profile from '../../../components/profile'

class OppositeCafe extends Component {
  render () {
    return (
      <DocumentTitle title='Opposite Cafe, Leeds | CoffeeHouses'>
        <Profile
          name='Opposite Cafe'
          city='Leeds'
          image='leeds/opposite_cafe.jpg' />
      </DocumentTitle>
    )
  }
}

export default OppositeCafe
