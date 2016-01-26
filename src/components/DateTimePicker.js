/**
 * Created by Muhammad Faizan on 26-Jan-16.
 */
import React from 'react';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import TimePicker from 'material-ui/lib/time-picker';

class DateTimePicker extends React.Component {
  render() {
    return (
      <div className="container">
	      <DatePicker
		      id = "myDatepicker"
		      hintText="Inline (AutoOk)"
		      container="inline"
		      autoOk={true}
		      onChange={this.handleChange}/>
	      <TimePicker
		      format="ampm"
		      hintText="12hr Format" />
      </div>

    );
  }
}

DateTimePicker.propTypes = {};
DateTimePicker.defaultProps = {};

export default DateTimePicker;
