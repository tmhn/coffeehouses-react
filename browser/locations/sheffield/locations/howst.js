'use strict'

import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'

import Profile from '../../../components/profile'

class Howst extends Component {
  render () {
    return (
      <DocumentTitle title='Howst Coffee, Sheffield | CoffeeHouses'>
        <Profile
          name='Howst Coffee'
          city='Sheffield'
          image='sheffield/howst.jpg' />
      </DocumentTitle>
    )
  }
}

export default Howst
