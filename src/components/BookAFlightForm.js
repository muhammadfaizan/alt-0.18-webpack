/**
 * Created by Muhammad Faizan on 02-Feb-16.
 */
import React from 'react';
import Slider from 'material-ui/lib/slider';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import TimePicker from 'material-ui/lib/time-picker';
import AirportInput from './Shared/AirportInput';

class BookAFlightForm extends React.Component {
  render() {
    return (
	    <div className='form-container'>
	      <form className='flight-form'>
		      <p className='flight-form-label'>Departure Date</p>
		      <p className='flight-form-input-container'>
				<DatePicker
					id = "myDatepicker"
					hintText="Inline (AutoOk)"
					container="inline"
					autoOk={true}
					onChange={this.handleChange}/>
				<TimePicker
					format="ampm"
					hintText="12hr Format" />
		      </p>
		      <AirportInput name={'from'} label={'From'} placeholder={"Select Departure Airport "} value={null} />
		      <AirportInput name={'destination'} label={'Destination'} placeholder={"Select Arrival Airport "} value={null} />
		      
		      <p className='flight-form-label'>Aircraft</p>
		      <p className='flight-form-input-container'>
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

