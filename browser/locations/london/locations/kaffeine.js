'use strict'

import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import Profile from '../../../pages/components/profile'

class Kaffeine extends Component {
  render () {
    return (
      <DocumentTitle title='Kaffeine, London | CoffeeHouses'>
        <Profile
          name='Kaffeine' />
      </DocumentTitle>
    )
  }
}

export default Kaffeine
