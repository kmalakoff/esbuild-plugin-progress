const assert = require('assert');

const esbuild = require('esbuild');
const progress = require('../../index.js');

const path = require('path');
const fs = require('fs-extra');

describe('plugin', () => {
  let tmp;
  beforeEach(async () => {
    tmp = path.join(process.cwd(), '.tmp');
    await fs.copy(path.join(__dirname, '..', 'data'), tmp);
  });
  afterEach(async () => {
    fs.remove(tmp);
  });

  it('should not fail', async () => {
    const build = await esbuild.build({
      absWorkingDir: tmp,
      entryPoints: ['client.tsx'],
      bundle: true,
      outfile: 'public/js/bundle.js',
      watch: true,
      plugins: [progress()],
    });

    assert.ok(fs.readFileSync(path.join(tmp, 'public', 'js', 'bundle.js'), 'utf8').length);

    await build.stop();
  });
});
