/**
 * Created by VD on 07-Jan-16.
 */
import React from 'react';
import {Link} from 'react-router';

class Home extends React.Component {
  render() {
    return (
      <p>Hello <Link to="/location">Location</Link></p>
    );
  }
}

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
