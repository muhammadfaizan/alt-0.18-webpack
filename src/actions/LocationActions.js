var alt = require('../AltApp');

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

  removeFavoriteLocation(location) {
    return location;
  }
}

module.exports = alt.createActions(LocationActions);
