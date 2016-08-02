'use strict'

import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'

import Profile from '../../../components/profile'

class StMartins extends Component {
  render () {
    return (
      <DocumentTitle title='StMartins, Leicester | CoffeeHouses'>
        <Profile
          name='St Martins' />
      </DocumentTitle>
    )
  }
}

export default StMartins
