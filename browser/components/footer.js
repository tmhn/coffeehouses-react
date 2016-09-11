'use strict'

import React, { Component } from 'react'
import config from '../../config'

class Footer extends Component {
  render () {

    return (
      <div className='footer container' style={{paddingTop: 60, paddingBottom: 100, fontFamily: 'Reem Kufi'}}>
        <hr style={{width: '100%'}}/>
        <div>
          <h4 style={{color: '#7B7B82', textAlign: 'center'}}>Crafted by <a href='http://tmhn.io' style={{color: '#24CC82'}}>Tom</a> - 2016</h4>
        </div>
      </div>
    )
  }
}

export default Footer
