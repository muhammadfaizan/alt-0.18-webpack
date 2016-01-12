/**
 * Created by V_D on 1/11/2016.
 */

var React = require('react');
var AltContainer = require('alt-container');
var JourneyActions = require('../actions/JourneyActions');
var Journeys = require('../components/Journeys');
var JourneyStore = require('../stores/JourneyStore');

var JourneysListing = React.createClass({

  componentDidMount() {
    JourneyActions.fetchJourneys();
  },

  render() {
    return (
        <div>
          <h3>Journeys Listing from XML to JSON</h3>

          <AltContainer store={JourneyStore}>
            <Journeys />
          </AltContainer>

        </div>
    );
  }
});

module.exports = JourneysListing;
