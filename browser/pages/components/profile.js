'use strict'

import React, { Component } from 'react'
import { Link } from 'react-router'
import Card from 'rebass'

class Profile extends Component {
  render () {
    return (
      <div className='row'>
        <div className='col-md-6'>
          <h1 style={{fontFamily: 'Sailec-Regular', color: '#222222', fontSize: 50}} className='banner_intro'>{this.props.name}</h1>
        </div>
        <div className='col-md-6'>
        </div>
      </div>
    )
  }
}

export default Profile
