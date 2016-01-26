/**
 * Created by VD on 1/8/2016.
 */
/**
 * Created by VD on 07-Jan-16.
 */
import React from 'react';
import {Link} from 'react-router';
import AutoComplete from 'material-ui/lib/auto-complete.js';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import lazyCache from 'react-lazy-cache';
import Arithmetic from './Arithmetic.js';

class Suggest extends React.Component {

    render() {
        return (
            <div>

              <DatePicker
                  id = "myDatepicker"
                  hintText="Inline (AutoOk)"
                  container="inline"
                  autoOk={true}
                  onChange={this.handleChange}/>

            <AutoComplete
                floatingLabelText="Search Text"
                dataSource={['ab', 'abc', 'abcd', 'abcde', 'abcdef', 'abcdefg', 'abcdefgh', 'abcdefghi','tahir','faizan']}
                onUpdateInput={(t) => { console.log(t); this.setState({input1: [t, t + t, t + t + t]}); }}
                onNewRequest={(t) => { console.log('request:' + t); }}
                triggerUpdateOnFocus={true}
                filter={AutoComplete.caseInsensitiveFilter}
            />



            </div>


        );
    }
}
console.log(this);

export default Suggest;
