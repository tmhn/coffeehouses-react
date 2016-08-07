'use strict'

import React, { Component } from 'react'
import { Link } from 'react-router'
import config from '../../_config'

class Footer extends Component {
  render () {

    return (
      <div className='footer container' style={{paddingTop: 60, paddingBottom: 100, fontFamily: 'Reem Kufi'}}>
        <hr style={{width: '100%'}}/>
        <div>
          <h4 style={{color: '#7B7B82', textAlign: 'center'}}>Crafted by <Link to='http://tmhn.io' style={{color: '#24CC82'}}>Tom</Link> - 2016</h4>
        </div>
      </div>
    )
  }
}

export default Footer
