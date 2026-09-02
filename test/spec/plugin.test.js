const assert = require('assert');

const { installSync, removeSync } = require('install-optional');
removeSync('esbuild', '@esbuild/');
installSync('esbuild', `${process.platform}-${process.arch}`);
const esbuild = require('esbuild');
const progress = require('esbuild-plugin-progress');

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
    const context = await esbuild.context({
      absWorkingDir: tmp,
      entryPoints: ['client.tsx'],
      bundle: true,
      outfile: 'public/js/bundle.js',
      plugins: [progress()],
    });

    await context.rebuild();
    context.dispose();

    assert.ok(fs.readFileSync(path.join(tmp, 'public', 'js', 'bundle.js'), 'utf8').length);
  });
});
