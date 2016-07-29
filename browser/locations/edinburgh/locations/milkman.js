'use strict'

import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import Profile from '../../../pages/components/profile'

class Milkman extends Component {
  render () {
    return (
      <DocumentTitle title='The Milkman, Edinburgh | CoffeeHouses'>
        <Profile
          name='The Milkman' />
      </DocumentTitle>
    )
  }
}

export default Milkman
