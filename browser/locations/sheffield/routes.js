/*
  Sheffield - routes.js
*/

import React from "react"
import { Route, IndexRoute } from "react-router"

// Locations
import Sheffield from "./index"
import Bakehouse from "./locations/bakehouse"
import Howst from "./locations/howst"
import InkAndWater from "./locations/ink_and_water"
import Marmadukes from "./locations/marmadukes"
import SteamYard from "./locations/steam_yard"
import Tamper from "./locations/tamper"
import Upshot from "./locations/upshot"

export default (
  <Route name="sheffield" path="sheffield">
    <IndexRoute component={Sheffield} />
    <Route name="bakehouse" path="bakehouse" component={Bakehouse} />
    <Route name="howst" path="howst" component={Howst} />
    <Route name="ink_and_water" path="ink-and-water" component={InkAndWater} />
    <Route name="marmadukes" path="marmadukes" component={Marmadukes} />
    <Route name="steamyard" path="steamyard" component={SteamYard} />
    <Route name="tamper" path="tamper" component={Tamper} />
    <Route name="upshot" path="upshot" component={Upshot} />
  </Route>
)
