'use strict'

import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import Profile from '../../../pages/components/profile'

class Monmouth extends Component {
  render () {
    return (
      <DocumentTitle title='Monmouth, London | CoffeeHouses'>
        <Profile
          name='Monmouth' />
      </DocumentTitle>
    )
  }
}

export default Monmouth
