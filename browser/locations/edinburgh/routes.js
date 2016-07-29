/*
  Edinburgh - routes.js
*/

import React from 'react'
import { Route, IndexRoute } from 'react-router'

// Locations
import Edinburgh from './index'
import ArtisanRoast from './locations/artisan_roast'
import BrewLab from './locations/brew_lab'
import CairngormCoffee from './locations/cairngorm_coffee'
import FortitudeCoffee from './locations/fortitude_coffee'
import MachinaEspresso from './locations/machina_espresso'
import Milkman from './locations/milkman'
import Wellington from './locations/wellington'

export default (
  <Route name='edinburgh' path='edinburgh'>
    <IndexRoute component={Edinburgh} />
    <Route name='artisan-roast' path='artisan-roast' component={ArtisanRoast} />
    <Route name='brew-lab' path='brew-lab' component={BrewLab} />
    <Route name='cairngorm-coffee' path='cairngorm-coffee' component={CairngormCoffee} />
    <Route name='fortitude-coffee' path='fortitude-coffee' component={FortitudeCoffee} />
    <Route name='machina-espresso' path='machina-espresso' component={MachinaEspresso} />
    <Route name='the-milkman' path='the-milkman' component={Milkman} />
    <Route name='wellington-coffee' path='wellington-coffee' component={Wellington} />
  </Route>
)
