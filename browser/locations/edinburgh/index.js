/*
  Edinburgh - index.js
*/
'use strict'

import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'

// Components
import Banner from '../../pages/components/banner'
import CoffeeCard from '../../pages/components/coffee_card'

class Edinburgh extends Component {
  render () {
    return (
      <DocumentTitle title='Edinburgh | CoffeeHouses'>
        <div className='container'>
          <Banner
            heading='Edinburgh'
            text=''
          />
          <section className='cities'>
            <div className='row'>
              <div className='col-md-6'>
                <CoffeeCard
                  name='The Milkman'
                  image='edinburgh/milkman.jpg'
                  link='edinburgh/the-milkman' />
              </div>
              <div className='col-md-6'>
                <CoffeeCard
                  name='Wellington Coffee'
                  image='edinburgh/wellington.jpg'
                  link='edinburgh/wellington-coffee' />
              </div>
            </div>

            <div className='row'>
              <div className='col-md-4'>
                <CoffeeCard
                  name='Machina Espresso'
                  image='edinburgh/machina_espresso.jpg'
                  link='edinburgh/machina-espresso' />
              </div>
              <div className='col-md-4'>
                <CoffeeCard
                  name='Fortitude Coffee'
                  image='edinburgh/fortitude_coffee.jpg'
                  link='edinburgh/fortitude-coffee' />
              </div>
              <div className='col-md-4'>
                <CoffeeCard
                  name='Cairngorm Coffee Co'
                  image='edinburgh/cairngorm_coffee.jpg'
                  link='edinburgh/cairngorm-coffee' />
              </div>          
            </div>

            <div className='row'>
              <div className='col-md-5'>
                <CoffeeCard
                  name='Brew Lab'
                  image='edinburgh/brewlab.jpg'
                  link='edinburgh/brew-lab' />
              </div>
              <div className='col-md-7'>
                <CoffeeCard
                  name='Artisan Roast'
                  image='edinburgh/artisan_roast.jpg'
                  link='edinburgh/artisan-roast' />
              </div>            
            </div>
          </section>          
        </div>
      </DocumentTitle>
    )
  }
}

export default Edinburgh
