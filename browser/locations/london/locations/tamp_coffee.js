'use strict'

import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'

import Profile from '../../../components/profile'

class TampCoffee extends Component {
  render () {
    return (
      <DocumentTitle title='Tamp Coffee, London | CoffeeHouses'>
        <Profile
          name='Tamp Coffee'
          city='London'
          image='london/tamp_coffee.jpg' />
      </DocumentTitle>
    )
  }
}

export default TampCoffee
