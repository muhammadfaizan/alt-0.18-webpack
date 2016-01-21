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
import { Router, Route, Link, IndexRoute, History} from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin';
import Locations from './components/Locations';
import JourneysListing from './pages/JourneysListing';
import Home from './components/Home';
import Suggest  from './components/AutoComplete';
import Mapping  from './components/Map';
import Storage  from './components/StorageComponent';
import LoginForm  from './pages/LoginForm';
import Map from './components/Map/Map';
import IconButton from 'material-ui/lib/icon-button';
import NavigationBack from 'material-ui/lib/svg-icons/navigation/arrow-back';
import FlatButton from 'material-ui/lib/flat-button';
import Directions  from './components/RouteMap';
injectTapEventPlugin();

/**/
const App = React.createClass({
    handleTouchTap :function(evt)  {
        this.history.goBack()
    },
    mixins: [ History ],
  render() {
    return (
        <div >
          <AppBar
              title="Alt App with Webpack and Material UI"
              onTouchTap={this.handleTouchTap}
              iconElementLeft={<IconButton><NavigationBack /></IconButton>}
              iconClassNameRight="muidocs-icon-navigation-expand-more"
              />
          {this.props.children}
        </div>
    )
  }
})
 // <!--<Route path="mapping" component={Mapping}/>-->
render((
    <Router>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="home" component={Home} />
        <Route path="location" component={Locations}/>
     

        <Route path="routemap" component={Directions}/>
        <Route path="map" component={Map}/>
        <Route path="login" component={LoginForm}/>
        <Route path="autocomplete" component={Suggest}/>
        <Route path="storage" component={Storage}/>

        <Route path="journeys" component={JourneysListing}/>
      </Route>
    </Router>
), document.getElementById('ReactApp'))