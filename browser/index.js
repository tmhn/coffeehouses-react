'use strict'

import React from 'react'
import { Route, Router, IndexRoute, browserHistory } from 'react-router'
import { render } from 'react-dom'

// Pages
import Main from './pages/main/main'
import Home from './pages/home/home'
import About from './pages/about/about'

// Files
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../public/css/style.css'

// Services

render((
  <Router history={browserHistory}>
    <Route name='home' path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route name='about' path='about' component={About} />
    </Route>
  </Router>), document.getElementById('app'))
