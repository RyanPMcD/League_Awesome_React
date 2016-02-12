import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from '../components/app'
import About from '../components/about'
import Team from '../components/team'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    {/* add the routes here */}
    <Route path="/team" component={Team}/>
    <Route path="/about" component={About}/>
  </Router>
), document.getElementById('main'))