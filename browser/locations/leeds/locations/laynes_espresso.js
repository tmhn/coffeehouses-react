'use strict'

import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'

// Components
import Profile from '../../../components/profile'

class LaynesEspresso extends Component {
  render () {
    return (
      <DocumentTitle title='Laynes Espresso, Leeds | CoffeeHouses'>
        <Profile
          name='Laynes Espresso'
          city='Leeds'
          image='leeds/laynes_espresso.jpg' />
      </DocumentTitle>
    )
  }
}

export default LaynesEspresso
