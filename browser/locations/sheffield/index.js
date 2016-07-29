/*
  Sheffield - index.js
*/
'use strict'

import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'

// Components
import Banner from '../../pages/components/banner'
import CoffeeCard from '../../pages/components/coffee_card'

class Sheffield extends Component {
  render () {
    return (
      <DocumentTitle title='Sheffield | CoffeeHouses'>
        <div className='container'>
          <Banner
            heading='Sheffield'
            text=''
          />
          <section className='cities'>
            <div className='row'>
              <div className='col-md-6'>
                <CoffeeCard
                  name='Ink and Water'
                  image='sheffield/ink.jpg'
                  link='sheffield/ink-and-water' />
              </div>
              <div className='col-md-6'>
                <CoffeeCard
                  name='Tamper Coffee'
                  image='sheffield/tamper.jpg'
                  link='sheffield/tamper' />
              </div>
            </div>

            <div className='row'>
              <div className='col-md-4'>
                <CoffeeCard
                  name='Upshot Espresso'
                  image='sheffield/upshot.jpg'
                  link='sheffield/upshot' />
              </div>
              <div className='col-md-4'>
                <CoffeeCard
                  name='Forge Bakehouse'
                  image='sheffield/bakehouse.jpg'
                  link='sheffield/bakehouse' />
              </div>
              <div className='col-md-4'>
                <CoffeeCard
                  name='HowSt'
                  image='sheffield/howst.jpg'
                  link='sheffield/howst' />
              </div>             
            </div>            

            <div className='row'>
              <div className='col-md-5'>
                <CoffeeCard
                  name='Steam Yard'
                  image='sheffield/steamyard.jpg'
                  link='sheffield/steamyard' />
              </div>
              <div className='col-md-7'>
                <CoffeeCard
                  name='Marmadukes'
                  image='sheffield/marmadukes.jpg'
                  link='sheffield/marmadukes' />
              </div>
            </div>
          </section>          
        </div>
      </DocumentTitle>
    )
  }
}

export default Sheffield
