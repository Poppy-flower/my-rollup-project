import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';

export default {

    input: 'src/index.js',
    output:{
        file:"dist/bundle.js",
        format: 'cjs',
        sourcemap: true,
    },
    plugins: [
        resolve({
            browser: true,
        }),
        json(),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
        }),
    ]
};