/**
 * Created by Muhammad Faizan on 22-Jan-16.
 */
import alt from '../AltApp'

class AuthorizationStore {
	constructor() {
		this.authorized = false;

		this.bindActions()//TODO bind actions of authorization

	}

	onChangeAuth (val){
		this.authorized = val;
	}
}

export default alt.createStore(AuthorizationStore, 'AuthorizationStore');