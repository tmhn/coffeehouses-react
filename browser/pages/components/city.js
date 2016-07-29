'use strict'

import React, { Component } from 'react'
import { Link } from 'react-router'
import { Card } from 'rebass'

class City extends Component {
  render () {
    return (
      <Link className='city' to={this.props.link}>
        <Card rounded width={'100%'}>
          <div className='location' style={{backgroundImage: `url(images/${this.props.image})`}}>
            <p className='heading'>
              {this.props.name}
            </p>
          </div>
        </Card>
      </Link>
    )
  }
}

export default City
