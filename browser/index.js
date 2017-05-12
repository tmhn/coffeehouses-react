/*
  App routes
*/

"use strict";

import React from "react";
import { Route, Router, IndexRoute, browserHistory } from "react-router";
import { render } from "react-dom";

// Files
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../public/css/style.css";

// Pages
import Main from "./pages/main/main";
import Home from "./pages/home/home";
import About from "./pages/about/about";

// -- Locations
import EdinburghRoutes from "./locations/edinburgh/routes";
import LeedsRoutes from "./locations/leeds/routes";
import LondonRoutes from "./locations/london/routes";
import SheffieldRoutes from "./locations/sheffield/routes";

render((
    <Router history={browserHistory}>
        <Route name="home" path="/" component={Main}>
            <IndexRoute component={Home} />
            <Route name="about" path="about" component={About} />
                {EdinburghRoutes}
                {LeedsRoutes}
                {LondonRoutes}
                {SheffieldRoutes}
            </Route>
    </Router>), document.getElementById("app"));
