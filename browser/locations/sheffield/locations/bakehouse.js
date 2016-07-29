'use strict'

import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import Profile from '../../../pages/components/profile'

class Bakehouse extends Component {
  render () {
    return (
      <DocumentTitle title='Forge Bakehouse, Sheffield | CoffeeHouses'>
        <Profile
          name='Forge Bakehouse' />
      </DocumentTitle>
    )
  }
}

export default Bakehouse
