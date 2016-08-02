'use strict'

import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import Profile from '../../../components/profile'

class FortitudeCoffee extends Component {
  render () {
    return (
      <DocumentTitle title='Fortitude Coffee, Edinburgh | CoffeeHouses'>
        <Profile
          name='Fortitude Coffee'
          city='Edinburgh'
          image='edinburgh/fortitude_coffee.jpg' />
      </DocumentTitle>
    )
  }
}

export default FortitudeCoffee
