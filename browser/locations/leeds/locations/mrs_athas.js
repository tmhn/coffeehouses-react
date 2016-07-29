'use strict'

import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'

// Components
import Profile from '../../../pages/components/profile'

class MrsAthas extends Component {
  render () {
    return (
      <DocumentTitle title='Mrs Athas, Leeds | CoffeeHouses'>
        <Profile
          name='Mrs Athas' />
      </DocumentTitle>
    )
  }
}

export default MrsAthas
