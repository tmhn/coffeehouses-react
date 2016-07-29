'use strict'

import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'

// Components
import Banner from '../../pages/components/banner'
import CoffeeCard from '../../pages/components/coffee_card'

class Leeds extends Component {
  render () {
    return (
      <DocumentTitle title='Leeds | CoffeeHouses'>
        <div className='container'>
          <Banner
            heading='Leeds'
            text=''
          />
          <section className='cities'>
            <div className='row'>
              <div className='col-md-6'>
                <CoffeeCard
                  name='Cafe 164'
                  image='leeds/cafe164.jpg'
                  link='leeds/cafe164' />
              </div>
              <div className='col-md-6'>
                <CoffeeCard
                  name='La Bottega Milanese'
                  image='leeds/bottega_milanese.jpg'
                  link='leeds/bottega-milanese' />
              </div>
            </div>

            <div className='row'>
              <div className='col-md-4'>
                <CoffeeCard
                  name='House of Koko'
                  image='leeds/house_of_koko.jpg'
                  link='leeds/house-of-koko' />
              </div>
              <div className='col-md-4'>
                <CoffeeCard
                  name='Mrs Athas'
                  image='leeds/mrs_athas.jpg'
                  link='leeds/mrs-athas' />
              </div>
              <div className='col-md-4'>
                <CoffeeCard
                  name='Opposite Cafe'
                  image='leeds/opposite_cafe.jpg'
                  link='leeds/opposite-cafe' />
              </div>             
            </div>            

            <div className='row'>
              <div className='col-md-5'>
                <CoffeeCard
                  name='Laynes Espresso'
                  image='leeds/laynes_espresso.jpg'
                  link='leeds/laynes-espresso' />
              </div>
              <div className='col-md-7'>
                <CoffeeCard
                  name='Sociable Folk'
                  image='leeds/folk.jpg'
                  link='leeds/sociable-folk' />
              </div>
            </div>
          </section>          
        </div>
      </DocumentTitle>
    )
  }
}

export default Leeds
