## esbuild-plugin-progress

A plugin to add a progress spinner to esbuild.

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

## Examples

[code](https://github.com/kmalakoff/esbuild-plugin-progress/tree/master/examples)
