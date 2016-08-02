'use strict'

import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'

import Profile from '../../../components/profile'

class Upshot extends Component {
  render () {
    return (
      <DocumentTitle title='Upshot Espresso, Sheffield | CoffeeHouses'>
        <Profile
          name='Upshot Espresso'
          city='Sheffield'
          image='sheffield/upshot.jpg' />
      </DocumentTitle>
    )
  }
}

export default Upshot
