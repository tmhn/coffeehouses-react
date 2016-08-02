'use strict'

import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'

import Profile from '../../../components/profile'

class OzoneCoffee extends Component {
  render () {
    return (
      <DocumentTitle title='Ozone Coffee, London | CoffeeHouses'>
        <Profile
          name='Ozone Coffee'
          city='London'
          image='london/ozone.jpg' />
      </DocumentTitle>
    )
  }
}

export default OzoneCoffee
