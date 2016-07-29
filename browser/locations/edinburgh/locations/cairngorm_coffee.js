'use strict'

import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import Profile from '../../../pages/components/profile'

class CairngormCoffee extends Component {
  render () {
    return (
      <DocumentTitle title='Cairngorm Coffee, Edinburgh | CoffeeHouses'>
        <Profile
          name='Cairngorm Coffee' />
      </DocumentTitle>
    )
  }
}

export default CairngormCoffee
