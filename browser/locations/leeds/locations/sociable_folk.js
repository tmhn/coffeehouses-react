'use strict'

import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'

// Components
import Profile from '../../../pages/components/profile'

class SociableFolk extends Component {
  render () {
    return (
      <DocumentTitle title='Sociable Folk, Leeds | CoffeeHouses'>
        <Profile
          name='Sociable Folk' />
      </DocumentTitle>
    )
  }
}

export default SociableFolk
