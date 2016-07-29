'use strict'

import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import Profile from '../../../pages/components/profile'

class Tamper extends Component {
  render () {
    return (
      <DocumentTitle title='Tamper Coffee, Sheffield | CoffeeHouses'>
        <Profile
          name='Tamper Coffee' />
      </DocumentTitle>
    )
  }
}

export default Tamper
