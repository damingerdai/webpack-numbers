"use strict";
const refs = require('./../src/ref.json');
const webpackNumbers = require("./../dist/webpack-numbers");
refs.forEach(ref => {
    if (webpackNumbers.numToWord(ref.num) !== ref.word) {
        throw Error(`numToWord: num: ${ref.num}, accutal: ${webpackNumbers.numToWord(ref.num)}, export: ${ref.word}`)
    }
    if (webpackNumbers.wordToNum(ref.word) !== ref.num) {
        throw Error(`wordToNum: word: ${ref.word}, accutal: ${webpackNumbers.wordToNum(ref.word)}, export:${ref.num}`)
    }
});
console.log('test success');

 
