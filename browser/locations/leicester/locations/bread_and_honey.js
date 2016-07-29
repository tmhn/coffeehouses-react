'use strict'

import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import Profile from '../../../pages/components/profile'

class BreadAndHoney extends Component {
  render () {
    return (
      <DocumentTitle title='Bread And Honey, Leicester | CoffeeHouses'>
        <Profile
          name='Bread And Honey' />
      </DocumentTitle>
    )
  }
}

export default BreadAndHoney
