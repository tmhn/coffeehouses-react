'use strict'

import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'

import Profile from '../../../components/profile'

class WorkshopCoffee extends Component {
  render () {
    return (
      <DocumentTitle title='Workshop Coffee, London | CoffeeHouses'>
        <Profile
          name='Workshop Coffee'
          city='London'
          image='london/workshop.jpg' />
      </DocumentTitle>
    )
  }
}

export default WorkshopCoffee
