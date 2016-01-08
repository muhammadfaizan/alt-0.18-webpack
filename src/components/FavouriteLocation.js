/**
 * Created by Muhammad Faizan on 08-Jan-16.
 */
import React from 'react';

class FavouriteLocation extends React.Component {
  render() {
    return (<div>
            <ul>
                {this.props.locations.map((location, i) => {
                    return (
                        <li key={i} className="chip" children={location.name}></li>
                    );
                })}
            </ul>
            {this.props.children}
        </div>
    );
  }
}

FavouriteLocation.propTypes = {};
FavouriteLocation.defaultProps = {};

export default FavouriteLocation;

