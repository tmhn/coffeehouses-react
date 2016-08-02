'use strict'

import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import Profile from '../../../components/profile'

class CairngormCoffee extends Component {
  render () {
    return (
      <DocumentTitle title='Cairngorm Coffee, Edinburgh | CoffeeHouses'>
        <Profile
          name='Cairngorm Coffee'
          city='Edinburgh'
          image='edinburgh/cairngorm_coffee.jpg' />
      </DocumentTitle>
    )
  }
}

export default CairngormCoffee
