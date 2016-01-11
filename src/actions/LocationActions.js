var alt = require('../AltApp');
var LocationSource = require('../sources/LocationSource');

class LocationActions {
  updateLocations(locations) {
    return locations;
  }

  fetchLocations() {
    return ;
  }

  locationsFailed(errorMessage) {
    return errorMessage;
  }

  favoriteLocation(location) {
    return location;
  }

  afterFetchJourneys(items) {
    return items;
  }

  fetchJourneys() {

    return (dispatch) => {
      // we dispatch an event here so we can have "loading" state.
      //dispatch();
      LocationSource.fetchJourneys().then((items) => {
            // we can access other actions within our action through `this.actions`
            this.afterFetchJourneys(items);
      });
    }

  }
}

module.exports = alt.createActions(LocationActions);
