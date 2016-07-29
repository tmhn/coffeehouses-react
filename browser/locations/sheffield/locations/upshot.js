'use strict'

import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import Profile from '../../../pages/components/profile'

class Upshot extends Component {
  render () {
    return (
      <DocumentTitle title='Upshot Espresso, Sheffield | CoffeeHouses'>
        <Profile
          name='Upshot Espresso' />
      </DocumentTitle>
    )
  }
}

export default Upshot
