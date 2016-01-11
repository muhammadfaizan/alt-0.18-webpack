/**
 * Created by V_D on 1/11/2016.
 */

var React = require('react');
var AltContainer = require('alt-container');
var LocationActions = require('../actions/LocationActions');
var Journeys = require('../components/Journeys');

var JourneysListing = React.createClass({

  componentDidMount() {
    //LocationActions.fetchJourneys();
  },

  render() {
    return (
        <div>
          <h3>Journeys Listing from XML to JSON</h3>




        </div>
    );
  }
});

module.exports = JourneysListing;
