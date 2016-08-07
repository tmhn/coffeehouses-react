'use strict'

import React, { Component } from 'react'

class Banner extends Component {
  render () {
    return (
      <div className='row banner'>
        <h1 style={{fontFamily: 'Reem Kufi', color: '#222222', fontSize: 50}} className='banner_intro'>{this.props.heading}</h1>
        <div className='banner_intro'>
          <p>{this.props.text}</p>
        </div>
      </div>
    )
  }
}

export default Banner
