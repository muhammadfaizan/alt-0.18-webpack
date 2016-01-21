
/**
 * Created by VD on 07-Jan-16.
 */
import React from 'react';
import {Link} from 'react-router';
import DatePicker from 'material-ui/lib/date-picker/date-picker';

class Datepicker extends React.Component {
  handleChange(e){
    console.log($("#myDatepicker").val());
  }
  render() {
    return (

        <DatePicker
            id = "myDatepicker"
            hintText="Inline (AutoOk)"
            container="inline"
            autoOk={true}
            onChange={this.handleChange}/>
    );
  }
}


export default Datepicker;

