'use strict'

import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import Profile from '../../../pages/components/profile'

class Marmadukes extends Component {
  render () {
    return (
      <DocumentTitle title='Marmadukes, Sheffield | CoffeeHouses'>
        <Profile
          name='Marmadukes' />
      </DocumentTitle>
    )
  }
}

export default Marmadukes
