'use strict'

import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'

// Components
import Profile from '../../../pages/components/profile'

class HouseOfKoko extends Component {
  render () {
    return (
      <DocumentTitle title='House Of Koko, Leeds | CoffeeHouses'>
        <Profile
          name='House Of Koko' />
      </DocumentTitle>
    )
  }
}

export default HouseOfKoko
