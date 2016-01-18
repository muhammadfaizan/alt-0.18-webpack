/**
 * Created by V_D on 1/18/2016.
 */

// __tests__/sum-test.js
jest.dontMock('../src/stores/TestStore');

describe('TestStore', function() {
  it('adds 2 to given number', function() {
    var store = require('../src/stores/TestStore');
    expect(store.makeSquare(3)).toBe(9);
  });
});
