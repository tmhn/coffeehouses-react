'use strict'

import React, { Component } from 'react'
import { Card } from 'rebass'
import request from 'superagent'
import moment from 'moment'

import TimeService from '../services/time'
import config from '../../config'

class Profile extends Component {

  componentWillMount() {
    TimeService.getCurrentTime((err, currentDate) => {
      this.setState({
        time: currentDate
      })
    })
  }

  componentDidMount() {

    let currentTime = this.state.time

    let venue = '4dd64e9de4cd37c8938e7b83'
    //let venue = this.props.venueId

    let clientId = config.CLIENT_ID
    let clientSecret = config.CLIENT_SECRET

    request.get(`https://api.foursquare.com/v2/venues/${venue}/hours/?\&client_id=${clientId}&client_secret=${clientSecret}&v=${currentTime}`)
      .accept('json')
      .end((err, res) => {
        if(err) return
          let result = res.body
          console.log(res.body)
          console.log(result.response.hours.timeframes)
    })
  }

  render () {
    return (
      <div className='row'>
        <div className='col-md-6'>
          <h1 style={profile_header}>{this.props.name}</h1>
          <h3 className='profileCity'>{this.props.city}</h3>
          <hr />
          <div className='profileTray'>
            <h4 className='reemKufi'>Opening Times</h4>
            <table className='table'>
              <tr>
                <td><p>Mon - Fri</p></td>
                <td><p>7:00 AM – 7:00 PM</p></td>
              </tr>
              <tr>
                <td><p>Sat</p></td>
                <td><p>9:00 AM – 6:00 PM</p></td>
              </tr>
              <tr>
                <td><p>Sun</p></td>
                <td><p>10:00 AM – 5:00 PM</p></td>
              </tr>            
            </table>
          </div>

          <h4 className='reemKufi'>Social Links</h4>
          <div className='profileTray container'>  
            <div className='row'>

              <a href='http://www.instagram.com'>
                <img src='/assets/instagram.png' className='socialIcon socialLinks'/>
                <p className= 'socialLinks' style={{paddingLeft: 15}}>@laynesespresso</p>
              </a>

            </div> 
            <div className='row'>
              <a href='http://www.twitter.com'>
                <img src='/assets/twitter.png' className='socialIcon socialLinks'/>
                <p className= 'socialLinks' style={{paddingLeft: 15}}>@laynesespresso</p>
              </a>
            </div> 
            <div className='row'>
              <a href='http://www.google.co.uk'>
                <img src='/assets/web.png' className='socialIcon socialLinks'/>
                <p className= 'socialLinks' style={{paddingLeft: 15}}>laynesespresso.co.uk</p>
              </a>
            </div>                                       
          </div>          

        </div>
        <div className='col-md-6'>
          <Card className='city' rounded width={'100%'}>
            <div className='profileLocation' style={{backgroundImage: `url(/images/${this.props.image})`}}>
            </div>
          </Card>
        </div>
      </div>
    )
  }
}

var profile_header = {
  fontFamily: 'Reem Kufi',
  color: '#222222',
  fontSize: 50,
  marginBottom: 0
}

export default Profile
