// import resolve from 'rollup-plugin-node-resolve';
// import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy'

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/index.js',
	external: [
		'preact', 
		'htm', 'htm/preact', 
		'preact-router', 'preact-router/match'
	],
	output: {
		file: 'build/bundle-app.js',
		// immediately-invoked function expression — suitable for <script> tags
		format: 'iife',
		sourcemap: true,
		// variable value 'main' is exported into Browser
		name: 'preactRouterRollupExample',
		// if 'named', then access from browser is based on value of name above.
		// app.ExportedName
		exports: 'named',
		globals: {
			'preact': 'preact',
			'htm': 'htm',
			'htm/preact': 'htmPreact',
			'preact-router': 'preactRouter',
			// 'preact-router/match': 'match'
		}
		// paths: {
		// 	'preact': 'https://unpkg.com/preact@10.0.5/dist/preact.module.js?module',
		// 	'htm': 'https://unpkg.com/htm@2.2.1/dist/htm.js?module',
		// 	'htm/preact': 'https://unpkg.com/htm@2.2.1/preact/index.js?module',
		// 	'preact-router': 'https://unpkg.com/preact-router@3.1.0/dist/preact-router.js?module',
		// 	'preact-router/match': 'https://unpkg.com/preact-router@3.1.0/match.js?module'
		// }
	},
	plugins: [
		copy({
			targets: [{ src: 'assets/*', dest: 'build' }]
		}),
        // resolve(), // tells Rollup how to find commonjs in node_modules
        typescript({module: 'esnext'}),
		// commonjs({extensions: ['.js', '.ts']}), // converts commonjs to ES modules
		production && terser() // minify, but only in production
	],
	treeshake: false
};
