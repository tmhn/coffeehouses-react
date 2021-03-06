'use strict'

import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import Profile from '../../../components/profile'

class BoteggaMilanese extends Component {
  render () {
    return (
      <DocumentTitle title='La Botegga Milanese, Leeds | CoffeeHouses'>
        <Profile
          name='La Botegga Milanese'
          city='Leeds'
          image='leeds/bottega_milanese.jpg' />
      </DocumentTitle>
    )
  }
}

export default BoteggaMilanese
