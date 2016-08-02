'use strict'

import React, { Component } from 'react'
import { Link } from 'react-router'

class Footer extends Component {
  render () {
    return (
      <div className='footer container' style={{paddingTop: 60, paddingBottom: 100}}>
        <hr style={{width: '100%'}}/>
        <div>
          <h4 style={{color: '#7B7B82'}}>Crafted by <Link to='http://tmhn.io' style={{color: '#333'}}>Tom</Link> - 2016</h4>
        </div>
      </div>
    )
  }
}

export default Footer
