import assert from 'assert';

import { installSync, removeSync } from 'install-optional';

removeSync('esbuild', '@esbuild/');
installSync('esbuild', `${process.platform}-${process.arch}`);

import esbuild from 'esbuild';
import progress from 'esbuild-plugin-progress';
import fs from 'fs-extra';
import path from 'path';
import url from 'url';

const __dirname = path.dirname(typeof __filename !== 'undefined' ? __filename : url.fileURLToPath(import.meta.url));

describe('plugin', () => {
  let tmp: string;
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
