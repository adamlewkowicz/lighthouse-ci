import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
  input: 'src/test.js',
  output: {
    dir: './dist',
    format: 'cjs',
  },
  plugins: [json(), typescript(), resolve(), commonjs()],
};
