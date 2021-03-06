/**
 * Created by Muhammad Faizan on 12-Jan-16.
 */

import alt from '../AltApp';
import MarkerAction from '../actions/MarkerAction'
import MarkerSource from '../sources/MarkerSource'


class MarkerStore {
        constructor() {
        //locations = MarkerSource.fetchMarkers();
        this.markers = [];
        this.center =[31.377852,7.226563];
        this.zoom= 4;
        //greatPlaceCoords: [],
        //this.registerAsync(MarkerSource);
        this.bindActions(MarkerAction);
        this.exportAsync(MarkerSource);
    }

    onUpdateMarker(markerPoints){


    }

    onMarkerFetchSuccess(markers) {
        this.markers= markers;
        console.log("final");console.log(markers);
    }

    onMarkerFetchFailed(message){
        this.markers = [];
    }


}

module.exports = alt.createStore(MarkerStore, 'MarkerStore');
