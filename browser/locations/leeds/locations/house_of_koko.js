'use strict'

import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'

// Components
import Profile from '../../../components/profile'

class HouseOfKoko extends Component {
  render () {
    return (
      <DocumentTitle title='House Of Koko, Leeds | CoffeeHouses'>
        <Profile
          name='House Of Koko'
          city='Leeds'
          image='leeds/house_of_koko.jpg' />
      </DocumentTitle>
    )
  }
}

export default HouseOfKoko
