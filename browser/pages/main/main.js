'use strict'

import React, { Component } from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'

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
        <div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default Main
