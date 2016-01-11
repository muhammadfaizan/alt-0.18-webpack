/**
 * Created by V_D on 1/11/2016.
 */

var React = require('react');
var AltContainer = require('alt-container');
var LocationActions = require('../actions/LocationActions');

var JourneysListing = React.createClass({

  componentDidMount() {
    //LocationActions.fetchLocation(this.props.params.locationId);
  },

  render() {
    return (
        <h3>Journeys Listing from XML to JSON</h3>
    );
  }
});

module.exports = JourneysListing;
