'use strict'

import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import { Link } from 'react-router'

// Components
import Banner from '../../pages/components/banner'
import CoffeeCard from '../../pages/components/coffee_card'

class Leicester extends Component {
  render () {
    return (
      <DocumentTitle title='Leicester | CoffeeHouses'>
        <div className='container'>
          <Banner
            heading='Leicester'
            text=''
          />
          <section className='cities'>
            <div className='row'>
              <div className='col-md-6'>
              </div>
              <div className='col-md-6'>
              </div>
            </div>

            <div className='row'>
              <div className='col-md-5'>
              </div>
              <div className='col-md-7'>
              </div>
            </div>
          </section>
        </div>
      </DocumentTitle>
    )
  }
}

export default Leicester