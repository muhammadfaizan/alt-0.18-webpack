/**
 * Created by V_D on 1/19/2016.
 */

var alt = require('../AltApp');
var UserActions = require('../actions/UserActions');
var {findAndRemove} = require('../utils/Helpers');

class UserStore {
  constructor() {
    this.authenticationToken = '';

    this.bindActions(UserActions);
  }

  onLogin(token) {
    this.authenticationToken = token;
  }

}

module.exports = alt.createStore(UserStore, 'UserStore');
