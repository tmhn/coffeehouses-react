/*
  Leicester - routes.js
*/

import React from 'react'
import { Route, IndexRoute } from 'react-router'

// Locations
import Leicester from './index'
import BreadAndHoney from './locations/bread-and-honey'

export default (
  <Route name='leicester' path='leicester'>
    <IndexRoute component={Leicester} />
    <Route name='bread-and-honey' path='bread-and-honey' component={BreadAndHoney} />
  </Route>
)