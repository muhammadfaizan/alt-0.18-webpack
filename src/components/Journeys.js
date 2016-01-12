/**
 * Created by V_D on 1/12/2016.
 */

var React = require('react');

var Journeys = React.createClass({
  render() {
    return (
        <ul className="collection">
          {this.props.journeys.map((journey, i) => {
            return (

                <li key={i} className="collection-item"> From {journey.from['#text']} to {journey.to['#text']}</li>

            );
          })}
        </ul>
    );
  }
});

module.exports = Journeys;
