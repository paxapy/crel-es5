import commonjs from 'rollup-plugin-commonjs';
import buble from '@rollup/plugin-buble'
import {terser} from 'rollup-plugin-terser';

export default [
	{
		input: 'crel.js',
		output: {
			file: 'crel.es.js',
			format: 'esm'
		},
		plugins: [commonjs(), buble()],
	},
	{
		input: 'crel.js',
		output: {
			file: 'crel.min.js',
			format: 'iife',
			name: 'crel'
		},
		plugins: [commonjs(), buble(), terser({output: {comments: ''}})],
	}
];
