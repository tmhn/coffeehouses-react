'use strict'

import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'

import Profile from '../../../components/profile'

class Gails extends Component {
  render () {
    return (
      <DocumentTitle title="Gail's, London | CoffeeHouses">
        <Profile
          name="Gail's Coffee"
          city='London'
          image='london/gails2.jpg' />
      </DocumentTitle>
    )
  }
}

export default Gails
