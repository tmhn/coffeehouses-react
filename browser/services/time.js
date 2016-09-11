'use strict'

import React from 'react'

class TimeService {

	//YYYYMMDD

	getCurrentTime(cb) {
		let date = new Date()
		let dayDigit = date.getDate().toString()
		let day = dayDigit < 10 ? '0' + dayDigit : dayDigit
		let monthDigit = date.getMonth().toString()
		let month = monthDigit < 10 ? '0' + monthDigit : monthDigit
		let year = date.getFullYear().toString()
		let currentDate = year+month+day
		
		return cb(null, currentDate)

	}
}

module.exports = new TimeService()
