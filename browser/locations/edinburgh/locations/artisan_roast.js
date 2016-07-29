'use strict'

import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import Profile from '../../../pages/components/profile'

class ArtisanRoast extends Component {
  render () {
    return (
      <DocumentTitle title='Artisan Roast, Edinburgh | CoffeeHouses'>
        <Profile
          name='Artisan Roast' />
      </DocumentTitle>
    )
  }
}

export default ArtisanRoast
