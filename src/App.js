/*
var React = require('react');
import {render} from 'react-dom';
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
//import { Router, Route, Link, IndexRoute  } from 'react-router';

console.log(Router);
console.log(Route);
console.log(IndexRoute);

render(
  <div>
    <h1>this is a page</h1>
    <Router>
      <Route path="/" component={Home} >
        <IndexRoute component={Home} />
        <Route path="location" component={Location}/>
      </Route>
    </Router>
  </div>,
  document.getElementById('ReactApp')
);
*/
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute } from 'react-router'

import Locations from './components/Locations';
import Home from './components/Home';

console.log(Home);
const App = React.createClass({
  render() {
    return (
        <div>
          {this.props.children}
        </div>
    )
  }
})

render((
    <Router>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="home" component={Home} />
        <Route path="location" component={Locations}/>
      </Route>
    </Router>
), document.getElementById('ReactApp'))