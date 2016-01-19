/**
 * Created by V_D on 1/19/2016.
 */

var alt = require('../AltApp');
var UserActions = require('../actions/UserActions');
var {findAndRemove} = require('../utils/Helpers');
var cookie = require('react-cookie');

class UserStore {
  constructor() {
    this.authenticationToken = '';

    this.bindActions(UserActions);
  }

  onAfterLogin(token) {
    this.authenticationToken = token;

    cookie.save('userToken', token);

    window.location.href = 'home';
  }

}

module.exports = alt.createStore(UserStore, 'UserStore');
