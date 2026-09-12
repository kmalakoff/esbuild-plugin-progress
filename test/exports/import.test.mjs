import assert from 'assert';
import progress from 'esbuild-plugin-progress';

describe('exports .mjs', () => {
  it('default', () => {
    assert.equal(typeof progress, 'function');
  });
});
