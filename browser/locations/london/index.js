'use strict'

import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import { Link } from 'react-router'

// Components
import Banner from '../../components/banner'
import CoffeeCard from '../../components/coffee_card'

class London extends Component {
  render () {
    return (
      <DocumentTitle title='London | CoffeeHouses'>
        <div className='container'>
          <Banner
            heading='London'
            text=''
          />

          <section className='cities'>
            <div className='row'>
              <div className='col-md-6'>
                <CoffeeCard
                  name='Gails'
                  image='london/gails2.jpg'
                  link='london/gails' />
              </div>
              <div className='col-md-6'>
                <CoffeeCard
                  name='Ozone Coffee Roasters'
                  image='london/ozone.jpg'
                  link='london/ozone-coffee' />
              </div>
            </div>

            <div className='row'>
              <div className='col-md-4'>
                <CoffeeCard
                  name='Workshop Coffee'
                  image='london/workshop.jpg'
                  link='london/workshop-coffee' />
              </div>
              <div className='col-md-4'>
                <CoffeeCard
                  name='Kaffeine'
                  image='london/kaffeine2.jpg'
                  link='london/kaffeine' />
              </div>
              <div className='col-md-4'>
                <CoffeeCard
                  name='Rapha'
                  image='london/rapha.jpg'
                  link='london/rapha' />
              </div>             
            </div>            

            <div className='row'>
              <div className='col-md-5'>
                <CoffeeCard
                  name='Tamp Coffee'
                  image='london/tamp_coffee.jpg'
                  link='london/tamp-coffee' />
              </div>
              <div className='col-md-7'>
                <CoffeeCard
                  name='Department of Coffee'
                  image='london/dept_coffee.jpg'
                  link='london/dept-of-coffee' />
              </div>
            </div>
          </section>

        </div>
      </DocumentTitle>
    )
  }
}

export default London
