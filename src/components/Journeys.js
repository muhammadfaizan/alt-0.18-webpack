/**
 * Created by V_D on 1/12/2016.
 */

var React = require('react');
var $ = require('jquery');

var Journeys = React.createClass({
  postXml(){

    $.post( "http://localhost:3000/api/samplePost", { name: "John", time: "2pm" })
        .done(function( data ) {
          alert( "Data Loaded: " + data );
      });
  },

  render() {
    return (
      <div>
      <ul className="collection">
        {this.props.journeys.map((journey, i) => {
          return (

            <li key={i} className="collection-item"> From {journey.from['#text']} to {journey.to['#text']}</li>

          );
        })}
      </ul>
        <input type="button" className="waves-effect waves-light btn" value="Post some xml to server" onClick={this.postXml}/>
      </div>
    );
  }
});

module.exports = Journeys;
