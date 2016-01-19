/**
 * Created by Muhammad Faizan on 12-Jan-16.
 */

import alt from '../AltApp';
import MarkerAction from '../actions/MarkerAction'
import MarkerSource from './FavoritesStore.js'


class MarkerStore {
    constructor() {
        locations = MarkerSource.getState();

        this.bindListeners({

        });
    }

}

module.exports = alt.createStore(MarkerStore, 'MarkerStore');
