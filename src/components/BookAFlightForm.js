/**
 * Created by Muhammad Faizan on 02-Feb-16.
 */
import React from 'react';
import Slider from 'material-ui/lib/slider';

class BookAFlightForm extends React.Component {
  render() {
    return (
	    <div className='form-container'>
	      <form className='flight-form'>
		      <p className='flight-form-label'>Departure Date</p>
		      <p className='flight-form-input-container'>
			      <input name="datetime" className='flight-form-input' type='text' placeholder="Select Date & Time" />
		      </p>
		      <p className='flight-form-label'>From</p>
		      <p>
			      <input name='from' className='' type='text' placeholder="Select Departure Airport " />
		      </p>
		      <p className='flight-form-label'>Destination</p>
		      <p>
			      <input name='destination' className='' type='text' placeholder="Select Arrival Airport"/>
		      </p>
		      <p className='flight-form-label'>Aircraft</p>
		      <p className=''>
			      <input name='aircraft' className='' type='text' placeholder="Select" />
		      </p>
		      <p className='flight-form-label'>No of Passengers</p>
		      <p>

				<Slider defaultValue={0.5}/>
		      </p>


		      <fieldset>
			      <legend>Passengers</legend>
		      <p className='flight-form-label'></p>
			      <p className='flight-form-input-container'>
				      <input name='nopassengers' type='text' placeholder="Select Date & Time"/>
			      </p>
		      </fieldset>

	      </form>
	    </div>
    );
  }
}

BookAFlightForm.propTypes = {};
BookAFlightForm.defaultProps = {};

export default BookAFlightForm;

