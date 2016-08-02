'use strict'

import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'

import Profile from '../../../components/profile'

class Bakehouse extends Component {
  render () {
    return (
      <DocumentTitle title='Forge Bakehouse, Sheffield | CoffeeHouses'>
        <Profile
          name='Forge Bakehouse'
          city='Sheffield'
          image='sheffield/bakehouse.jpg' />
      </DocumentTitle>
    )
  }
}

export default Bakehouse
