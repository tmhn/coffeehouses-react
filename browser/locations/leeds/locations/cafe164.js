'use strict'

import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'

// Components
import Profile from '../../../pages/components/profile'

class Cafe164 extends Component {
  render () {
    return (
      <DocumentTitle title='Cafe 164, Leeds | CoffeeHouses'>
        <Profile
          name='Cafe 164' />
      </DocumentTitle>
    )
  }
}

export default Cafe164
