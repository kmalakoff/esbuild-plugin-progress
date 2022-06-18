import esbuild from 'esbuild';
import progress from '../../index.js';

esbuild.build({
  entryPoints: ['client.tsx'],
  bundle: true,
  outfile: 'public/bundle.js',
  plugins: [progress()],
});
