import assert from 'assert';
import progress from 'esbuild-plugin-progress';

describe('exports .ts', () => {
  it('default', () => {
    assert.equal(typeof progress, 'function');
  });
});
