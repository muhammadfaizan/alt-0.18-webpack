/**
 * Created by Muhammad Faizan on 12-Jan-16.
 */
var alt = require('../AltApp');

class MarkerAction {

    updateMarker(locations) {
        return locations;
    }

    getMarker() {
        return ;
    }

}

module.exports = alt.createActions(MarkerAction);
