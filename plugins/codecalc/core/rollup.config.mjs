import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import commonjs from '@rollup/plugin-commonjs';

const sharedPlugins = [
  resolve({
    preferBuiltins: false
  }),
  commonjs(),
  terser()
];

export default [
  {
    input: 'calculator.js',
    output: [
      {
        file: '../app/src/calculator.min.js',
        format: 'iife',
        name: 'CodeCalcCore',
        sourcemap: false
      },
      {
        file: '../test/calculator.min.mjs',
        format: 'es',
        sourcemap: false
      },
      {
        file: '../test/calculator.min.js',
        format: 'iife',
        name: 'CodeCalcCore',
        sourcemap: false
      }
    ],
    plugins: sharedPlugins
  },
  {
    input: '../app/src/index.js',
    output: {
      file: '../app/src/app.bundle.js',
      format: 'iife',
      name: 'CodeCalcApp',
      sourcemap: false
    },
    plugins: sharedPlugins
  }
];
