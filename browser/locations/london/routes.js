/*
  London - routes.js
*/

import React from 'react'
import { Route, IndexRoute } from 'react-router'

// Locations
import London from './index'
import DepartmentOfCoffee from './locations/department_coffee'
import Gails from './locations/gails'
import Kaffeine from './locations/kaffeine'
import Monmouth from './locations/monmouth'
import OzoneCoffee from './locations/ozone_coffee'
import Rapha from './locations/rapha'
import TampCoffee from './locations/tamp_coffee'
import WorkshopCoffee from './locations/workshop_coffee'

export default (
  <Route name='london' path='london'>
    <IndexRoute component={London} />
    <Route name='dept-of-coffee' path='dept-of-coffee' component={DepartmentOfCoffee} />
    <Route name='gails' path='gails' component={Gails} />
    <Route name='kaffeine' path='kaffeine' component={Kaffeine} />
    <Route name='monmouth' path='monmouth' component={Monmouth} />
    <Route name='ozone-coffee' path='ozone-coffee' component={OzoneCoffee} />
    <Route name='rapha' path='rapha' component={Rapha} />
    <Route name='tamp-coffee' path='tamp-coffee' component={TampCoffee} />
    <Route name='workshop-coffee' path='workshop-coffee' component={WorkshopCoffee} />
  </Route>
)
