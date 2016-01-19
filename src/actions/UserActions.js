/**
 * Created by V_D on 1/19/2016.
 */

var alt = require('../AltApp');
var AuthenicationSource = require('../sources/AuthenicationSource');

class UserActions {

  login(data) {

    return (dispatch) => {

      dispatch();
      AuthenicationSource.login(data)
          .then((data) => {

            if (data.isSuccess)
              this.afterLogin(data.token);
            else
              this.afterLoginFailure(data.message);

          });
    }
  }

  afterLogin(token) {
    return token;
  }

  afterLoginFailure(message) {
    return message;
  }

}

module.exports = alt.createActions(UserActions);

