import flux from 'control';
//import {createStore, bind} from 'alt/utils/decorators';
import actions from 'actions/dummyActions';
//import makeHot from 'alt/utils/makeHot'


class DummyStore {
    constructor() {
       name = 'awesome';

      bindListeners( {
          updateName: actions.updateName
      })

    }
  
  updateName(name) {
    this.name = name;
  }
}

module.exports = alt.createStore(DummyStore, 'DummyStore');
//export default DummyStore;
