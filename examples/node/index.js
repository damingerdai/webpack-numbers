// https://github.com/kalcifer/webpack-library-example/blob/master/examples/node/example.js
require('lodash');
var webpackNumbers = require('./webpack-numbers.js');
var out = () => {
    process.stdout.write('This is the result for numtoword(1) === ' + webpackNumbers.numToWord(1));
};
out();