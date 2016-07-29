'use strict'

import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'

import Banner from '../components/banner'
import City from '../components/city'

class Home extends Component {
  render () {
    return (
      <DocumentTitle title='Home | CoffeeHouses'>

        <div className='container'>
          <Banner
            heading='CoffeeHouses'
            text='CoffeeHouses aims to find you the best coffee shops in your local area, using handpicked photos taken by coffee lovers on Instagram.' 
          />

          <section className='cities'>
            <div className='row'>
              <div className='col-md-4'>
                <City
                  link='london'
                  name='London'
                  image='london/tamp_coffee.jpg' />
              </div>
              <div className='col-md-4'>
                <City
                  link='leeds'
                  name='Leeds'
                  image='leeds/folk.jpg' />
              </div>
              <div className='col-md-4'>
                <City
                  link='edinburgh'
                  name='Edinburgh'
                  image='edinburgh/wellington.jpg' />
              </div>
            </div>

            <div className='row'>
              <div className='col-md-5'>
                <City
                  link='sheffield'
                  name='Sheffield'
                  image='sheffield/ink.jpg' />
              </div>
              <div className='col-md-7'>
                <City
                  link='leicester'
                  name='Leicester'
                  image='leicester/st_martins.jpg' />
              </div>
            </div>
          </section>
        </div>

      </DocumentTitle>
    )
  }
}

export default Home
