/**
 * Created by V_D on 1/12/2016.
 */

var alt = require('../AltApp');
var LocationActions = require('../actions/LocationActions');

class JourneyStore {
  constructor() {
    this.journeys = [
      { id: 0, name: 'Abu Dhabi' },
      { id: 1, name: 'Berlin' },
      { id: 2, name: 'Bogota' },
      { id: 3, name: 'Buenos Aires' },
      { id: 4, name: 'Cairo' },
      { id: 5, name: 'Chicago' },
      { id: 6, name: 'Lima' },
      { id: 7, name: 'London' },
      { id: 8, name: 'Miami' },
      { id: 9, name: 'Moscow' },
      { id: 10, name: 'Mumbai' },
      { id: 11, name: 'Paris' },
      { id: 12, name: 'San Francisco' }
    ];


  }

  onAfterFetchJourneys(list) {
    this.journeys = list;
  }
}

module.exports = alt.createStore(JourneyStore, 'JourneyStore');

