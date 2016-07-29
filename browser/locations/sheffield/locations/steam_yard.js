'use strict'

import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import Profile from '../../../pages/components/profile'

class SteamYard extends Component {
  render () {
    return (
      <DocumentTitle title='Steam Yard, Sheffield | CoffeeHouses'>
        <Profile
          name='Steam Yard' />
      </DocumentTitle>
    )
  }
}

export default SteamYard
