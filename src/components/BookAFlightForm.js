/**
 * Created by Muhammad Faizan on 02-Feb-16.
 */
import React from 'react';

class BookAFlightForm extends React.Component {
  render() {
    return (
	    <div className='form-container'>
	      <form className=''>
		      <p className=''>Departure Date</p>
		      <p className=''>
			      <input name="datetime" className='' type='text' placeholder="Select Date & Time" value={this.props.form.datetime}/>
		      </p>
		      <p className=''>From</p>
		      <p>
			      <input name='from' className='' type='text' placeholder="Select Departure Airport" value={this.props.form.from}/>
		      </p>
		      <p className=''>Destination</p>
		      <p>
			      <input name='destination' className='' type='text' placeholder="Select Arrival Airport" value={this.props.form.destination}/>
		      </p>
		      <p className=''>Aircraft</p>
		      <p className=''>
			      <input name='aircraft' className='' type='text' placeholder="Select Date & Time" value={this.props.form.aircraft}/>
		      </p>
		      <p className=''>No of Passengers</p>
		      <p>
			      <input name='no-of-passengers' type='text' placeholder="Select Date & Time" value={this.props.form.noOfPassengers}/>
		      </p>
		      <p></p>
		      <p>
			      <input name='no-of-passengers' type='text' placeholder="Select Date & Time" value={this.props.form.noOfPassengers}/>
		      </p>

	      </form>
	    </div>
    );
  }
}

BookAFlightForm.propTypes = {};
BookAFlightForm.defaultProps = {};

export default BookAFlightForm;

