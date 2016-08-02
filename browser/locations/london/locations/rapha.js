'use strict'

import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'

import Profile from '../../../components/profile'

class Rapha extends Component {
  render () {
    return (
      <DocumentTitle title='Rapha, London | CoffeeHouses'>
        <Profile
          name='Rapha'
          city='London'
          image='london/rapha.jpg' />
      </DocumentTitle>
    )
  }
}

export default Rapha
