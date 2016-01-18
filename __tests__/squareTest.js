/**
 * Created by V_D on 1/18/2016.
 */

// __tests__/sum-test.js
jest.dontMock('../src/AltApp');
jest.dontMock('../src/stores/TestStore');
jest.dontMock('../src/stores/FavoritesStore');
jest.dontMock('../src/actions/LocationActions');

import alt from '../src/AltApp';

var FavoritesStore = require('../src/stores/FavoritesStore');

var LocationActions = require('../src/actions/LocationActions');

describe('TestStore', function() {

  it('listens to add favourite action', () => {
    // get initial state of store
    var oldLength = FavoritesStore.getState().locations.length;

    console.log(oldLength);

    // create action to be dispatched
    var data = {id: 10, name: 'bhawalpur'},
        action = LocationActions.FAVORITE_LOCATION;

    alt.dispatcher.dispatch({action, data});

    console.log(FavoritesStore.getState().locations.length);

    // assertions
    expect(FavoritesStore.getState().locations.length).toBe(oldLength + 1);

  });


});
