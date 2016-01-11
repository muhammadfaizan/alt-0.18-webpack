/**
 * Created by VD on 07-Jan-16.
 */
import React from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/lib/raised-button';
class Home extends React.Component {
  render() {
    return (
        <div>
          <Link to="/location">
            <RaisedButton primary={true} label="Location"/>
          </Link>
          <Link to="/map">
            <RaisedButton primary={true} label="Map"/>
          </Link>
        </div>

    );
  }
}

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
