const assert = require('assert');
const progress = require('esbuild-plugin-progress');

describe('exports .cjs', () => {
  it('default', () => {
    assert.equal(typeof progress, 'function');
  });
});
