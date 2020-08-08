import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import pkg from './package.json';
import { terser } from "rollup-plugin-terser";

const config = {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.esm.js',
    format: 'es',
    exports: 'named',
    banner: `/*!
 * Simple-Pinyin ${pkg.version},
 * Copyright @ XQ Kuang <x@kxq.io>, All rights reserved.
 * 
 * Licensed under the MIT License.
 **/`
  },
  plugins: [
    resolve(),
    typescript({
      module: 'ESNEXT',
    }),
  ]
};

const minConfig = {
  ...config,
  output: {
    ...config.output,
    file: 'dist/index.umd.js',
    format: 'umd',
    name: 'simplyPinyin'
  },
  plugins: [
    resolve(),
    typescript({
      target: 'es5',
      module: 'ESNEXT',
    }),
    terser(),
  ],
};

export default [
  config,
  minConfig,
];
