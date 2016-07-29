/*
  Leeds - routes.js
*/

import React from 'react'
import { Route, IndexRoute } from 'react-router'

// Locations
import Leeds from './index'
import BottegaMilanese from './locations/bottega_milanese'
import Cafe164 from './locations/cafe164'
import HouseOfKoko from './locations/house_of_koko'
import LaynesEspresso from './locations/laynes_espresso'
import MrsAthas from './locations/mrs_athas'
import OppositeCafe from './locations/opposite_cafe'
import SociableFolk from './locations/sociable_folk'

export default (
  <Route name='leeds' path='leeds'>
    <IndexRoute component={Leeds} />
    <Route name='bottega-milanese' path='bottega-milanese' component={BottegaMilanese} />
    <Route name='cafe164' path='cafe164' component={Cafe164} />
    <Route name='house-of-koko' path='house-of-koko' component={HouseOfKoko} />
    <Route name='laynes-espresso' path='laynes-espresso' component={LaynesEspresso} />
    <Route name='mrs-athas' path='mrs-athas' component={MrsAthas} />
    <Route name='opposite-cafe' path='opposite-cafe' component={OppositeCafe} />
    <Route name='sociable-folk' path='sociable-folk' component={SociableFolk} />
  </Route>
)
