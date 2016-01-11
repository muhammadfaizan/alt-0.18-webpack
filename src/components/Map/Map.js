/**
 * Created by Muhammad Faizan on 11-Jan-16.
 */
import React from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import GoogleMap from 'google-map-react';
import MyGreatPlace from './MapPlace.js';
console.log(GoogleMap);
console.log(MyGreatPlace);
console.log(shouldPureComponentUpdate);

export default class SimpleMapPage extends React.Component {
    static propTypes = {
        center: React.PropTypes.array,
        zoom: React.PropTypes.number,
        greatPlaceCoords: React.PropTypes.any
    };

    static defaultProps = {
        center: [59.938043, 30.337157],
        zoom: 9,
        greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
    };

    shouldComponentUpdate = shouldPureComponentUpdate;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="map">
            <GoogleMap
                apiKey='AIzaSyClrg6TsqAGm4zfUTBcZGXMxdG2Sg3LnfM' // set if you need stats etc ...
                center={this.props.center}
                zoom={this.props.zoom}>
                <MyGreatPlace lat={59.955413} lng={30.337844} text={'A'} /* Kreyser Avrora */ />
                <MyGreatPlace {...this.props.greatPlaceCoords} text={'B'} /* road circle */ />
            </GoogleMap>
                </div>
        );
    }
}