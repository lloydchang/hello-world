const assert = require('assert');
const helloWorld = require('./hello_world_javascript');

describe('helloWorld', () => {
  it('should return "Hello, World!"', () => {
    assert.equal(helloWorld(), "Hello, World!");
  });
});
