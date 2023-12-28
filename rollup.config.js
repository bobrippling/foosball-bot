const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const nodePolyfills = require('rollup-plugin-polyfill-node');
const jsx = require("rollup-plugin-jsx");

module.exports = {
  input: "src/App.jsx",
  output: {
    file: "bundle.js",
    format: "iife",
  },
  plugins: [
    jsx({ factory: "React.createElement" }),
    commonjs(),
    resolve(),
    nodePolyfills(),
  ],
};
