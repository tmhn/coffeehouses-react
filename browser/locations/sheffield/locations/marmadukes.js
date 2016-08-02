'use strict'

import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'

import Profile from '../../../components/profile'

class Marmadukes extends Component {
  render () {
    return (
      <DocumentTitle title='Marmadukes, Sheffield | CoffeeHouses'>
        <Profile
          name='Marmadukes'
          city='Sheffield'
          image='sheffield/marmadukes.jpg' />
      </DocumentTitle>
    )
  }
}

export default Marmadukes
