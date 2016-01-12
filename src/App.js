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
require("./styles/main.css");
require("./styles/materialize.css");
import React from 'react'
import { render } from 'react-dom'
import AppBar from 'material-ui/lib/app-bar';
import { Router, Route, Link, IndexRoute } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin';
import Locations from './components/Locations';
import JourneysListing from './pages/JourneysListing';
import Home from './components/Home';
import Map from './components/Map/Map';
injectTapEventPlugin();

/**/
const App = React.createClass({
  render() {
    return (
        <div >
          <AppBar
              title="Alt App with Webpack and Material UI"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
              />
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
        <Route path="map" component={Map}/>
        <Route path="journeys" component={JourneysListing}/>
      </Route>
    </Router>
), document.getElementById('ReactApp'))