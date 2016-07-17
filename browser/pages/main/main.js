'use strict'

import React, { Component } from 'react'
import Header from '../components/header'

class Main extends Component {
  render () {
    return (
      <div>
        <div className='container'>
          <Header />
        </div>
        <div className='container'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Main
