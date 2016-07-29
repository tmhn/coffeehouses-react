'use strict'

import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import Profile from '../../../pages/components/profile'

class BoteggaMilanese extends Component {
  render () {
    return (
      <DocumentTitle title='La Botegga Milanese, Leeds | CoffeeHouses'>
        <Profile
          name='La Botegga Milanese' />
      </DocumentTitle>
    )
  }
}

export default BoteggaMilanese
