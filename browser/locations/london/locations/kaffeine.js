'use strict'

import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'

import Profile from '../../../components/profile'

class Kaffeine extends Component {
  render () {
    return (
      <DocumentTitle title='Kaffeine, London | CoffeeHouses'>
        <Profile
          name='Kaffeine'
          city='London'
          image='london/kaffeine.jpg' />
      </DocumentTitle>
    )
  }
}

export default Kaffeine
