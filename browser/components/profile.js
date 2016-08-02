'use strict'

import React, { Component } from 'react'
import { Card } from 'rebass'

class Profile extends Component {
  render () {
    return (
      <div className='row'>
        <div className='col-md-6'>
          <h1 style={profile_header}>{this.props.name}</h1>
          <h3 style={profile_city}>{this.props.city}</h3>
          <hr />
          <p>Ink and Water is based</p>
        </div>
        <div className='col-md-6'>
          <Card className='city' rounded width={'100%'}>
            <div className='profile_location' style={{backgroundImage: `url(/images/${this.props.image})`}}>
            </div>
          </Card>
        </div>
      </div>
    )
  }
}

var profile_header = {
  fontFamily: 'Sailec-Regular',
  color: '#222222',
  fontSize: 50,
  marginBottom: 0
}

var profile_city = {
  fontFamily: 'Sailec-Regular',
  color: '#7B7B82',
  marginTop: 0
}

export default Profile
