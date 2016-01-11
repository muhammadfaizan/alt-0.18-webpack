/**
 * Created by Muhammad Faizan on 11-Jan-16.
 */

var React = require('react');

var MapLocation = React.createClass({
    getInitialState: function() {
        return {
            map : null
        };
    },
    componentDidMount: function () {
        var that = this;
        if(document.readyState !== "complete") {
            window.addEventListener("load", function () {
                that.createMap();
            })
        }
        else {
            that.createMap();
        }

    },
    componentWillUpdate: function() {
        var that = this;
        if(document.readyState !== "complete") {
            window.addEventListener("load", function () {
                that.createMap();
            })
        }
        else {
            that.createMap();
        }
    },

    createMap: function () {
        var lng = this.props.lng,
            lat = this.props.lat,
            mapCanvas = this.refs.map_canvas,
            mapOptions = {
                center: new google.maps.LatLng(lng, lat),
                zoom: 15,
                draggable: false,
                scrollwheel: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

        var map = new google.maps.Map(mapCanvas, mapOptions);

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(lng, lat),
            map: map,
            //icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'
        });

        this.setState({map: map});
    },

    enableScroll: function() {
        if(this.state.map) {
            this.state.map.set('scrollwheel', true);
            this.state.map.set('draggable', true);
        }
    },

    render: function () {
        var lat = this.props.lat,
            lng = this.props.lng;

        return (
            <div className='map-location'>
                <h3 className='hotel__sub-title'>
                    Location
                </h3>
                <div onClick={this.enableScroll} id="google-map" ref='map_canvas'></div>
            </div>
        )
    }
});

module.exports = MapLocation;