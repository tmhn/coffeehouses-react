'use strict'

import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'

// Components
import Profile from '../../../pages/components/profile'

class OppositeCafe extends Component {
  render () {
    return (
      <DocumentTitle title='Opposite Cafe, Leeds | CoffeeHouses'>
        <Profile
          name='Opposite Cafe' />
      </DocumentTitle>
    )
  }
}

export default OppositeCafe
