/**
 * Created by Muhammad Faizan on 11-Jan-16.
 */
import React from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import GoogleMap from 'google-map-react';
import MyGreatPlace from './MapPlace.js';
import FavoriteStore from '../../stores/FavoritesStore'

export default class SimpleMapPage extends React.Component {
    static propTypes = {
        center: React.PropTypes.array,
        zoom: React.PropTypes.number,
        greatPlaceCoords: React.PropTypes.any
    };
    static defaultProps = {
        center: [59.938043, 30.337157],
        zoom: 9,
        greatPlaceCoords: {lat: 59.724465, lng: 30.080121},
        greatPlace :FavoriteStore.getState().locations
    };

    shouldComponentUpdate = shouldPureComponentUpdate;

    constructor(props) {
        super(props);
    }

    render() {
      return (
        <div className="map">
          <GoogleMap
            onGoogleApiLoaded={({map, maps}) => {
              var marker2 = new google.maps.Marker({
                map: map,
                draggable: false,
                position: {lat: 48.857, lng: 2.352}
              });
/*
              var self = this;
              var marks = [];
              let geocoder = new maps.Geocoder();
              var places =[];

              geocoder.geocode( { 'address': this.props.greatPlace[0]}, function(results, status) {
                  if (status == google.maps.GeocoderStatus.OK) {
                    new google.maps.Marker({
                      map: map,
                      position: {
                        lat: results[0].geometry.location.lat(),
                        lng: results[0].geometry.location.lng()
                       },
                       key: results[0].place_id
                     })
                   }
                    else {
                      alert("Geocode was not successful for the following reason: " + status);
                    }
                  });
*/
            }}

                bootstrapURLKeys={
                    {key: 'AIzaSyClrg6TsqAGm4zfUTBcZGXMxdG2Sg3LnfM'}
                }// set if you need stats etc ...
                center={this.props.center}
                zoom={this.props.zoom}>
                <MyGreatPlace lat={59.955413} lng={30.337844} text={'A'} /* Kreyser Avrora */ />
                <MyGreatPlace {...this.props.greatPlaceCoords} text={'B'} /* road circle */ />
            </GoogleMap>
                </div>
        );
    }
}