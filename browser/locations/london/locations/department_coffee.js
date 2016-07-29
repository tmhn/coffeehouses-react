'use strict'

import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import Profile from '../../../pages/components/profile'

class DepartmentOfCoffee extends Component {
  render () {
    return (
      <DocumentTitle title='Department Of Coffee, London | CoffeeHouses'>
        <Profile
          name='Department Of Coffee' />
      </DocumentTitle>
    )
  }
}

export default DepartmentOfCoffee
