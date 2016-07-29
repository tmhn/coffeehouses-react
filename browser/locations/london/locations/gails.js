'use strict'

import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import Profile from '../../../pages/components/profile'

class Gails extends Component {
  render () {
    return (
      <DocumentTitle title='Gails, London | CoffeeHouses'>
        <Profile
          name='Gails Coffee' />
      </DocumentTitle>
    )
  }
}

export default Gails
