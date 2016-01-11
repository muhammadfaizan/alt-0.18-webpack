/**
 * Created by V_D on 1/11/2016.
 */

var alt = require('../AltApp');
var LocationActions = require('../actions/LocationActions');

class JourneyStore {
  constructor() {
    this.journeys = [];

    this.bindActions(LocationActions);
  }

  onAfterFetchJourneys(list) {
    this.journeys = list;
  }
}

module.exports = alt.createStore(JourneyStore, 'JourneyStore');

