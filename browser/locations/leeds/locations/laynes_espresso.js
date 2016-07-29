'use strict'

import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'

// Components
import Profile from '../../../pages/components/profile'

class LaynesEspresso extends Component {
  render () {
    return (
      <DocumentTitle title='Laynes Espresso, Leeds | CoffeeHouses'>
        <Profile
          name='Laynes Espresso' />
      </DocumentTitle>
    )
  }
}

export default LaynesEspresso
