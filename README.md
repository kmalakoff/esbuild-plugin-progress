## esbuild-plugin-progress

A plugin to add a progress spinner to esbuild.

Install it with esbuild as a development dependency. Node.js 16 or newer is required.

```bash
npm install --save-dev esbuild esbuild-plugin-progress
```

Use the plugin in your esbuild build script:

```javascript
const esbuild = require('esbuild');
const progress = require('esbuild-plugin-progress');

esbuild.build({
  entryPoints: ['./src/index.js'],
  bundle: true,
  outfile: './public/bundle.js',
  plugins: [progress()],
});
```

The spinner reports when the build starts and shows whether esbuild finished successfully or returned errors. Pass `message` to change the text shown while a build runs:

```javascript
plugins: [progress({ message: 'Bundling' })]
```

## Examples

[code](https://github.com/kmalakoff/esbuild-plugin-progress/tree/master/examples)
