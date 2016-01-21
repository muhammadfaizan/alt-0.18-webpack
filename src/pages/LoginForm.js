/**
 * Created by V_D on 1/19/2016.
 */

var React = require('react');
var AltContainer = require('alt-container');
var UserActions = require('../actions/UserActions');
var Login = require('../components/Login');
var UserStore = require('../stores/UserStore');

var LoginForm = React.createClass({

  loginClick(data){
    UserActions.login(data);
  },
  render() {
    return (
        <div className="container">
          <h3>User Login</h3>

          <AltContainer store={UserStore}>
            <Login onLogin = {this.loginClick}/>
          </AltContainer>

        </div>
    );
  }
});

module.exports = LoginForm;
