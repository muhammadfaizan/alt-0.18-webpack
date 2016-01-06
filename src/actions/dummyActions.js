import flux from 'control';
//import {createActions} from 'alt/utils/decorators';


class DummyActions {
  constructor() {
    this.generateActions('updateName');
  }
}

export default flux.createAction(DummyActions);
