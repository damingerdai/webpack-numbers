import _ from 'lodash';
import numRef from './ref.json';

export interface INumRef {
    num: number;
    word: string;
}

export function numToWord(num: number) {
    return _.reduce(numRef, (accum, ref) => ref.num === num ? ref.word : accum, 'undefined');
}

export function wordToNum(word: string) {
    return _.reduce(numRef, (accum, ref) => ref.word === word && word.toLowerCase() ? ref.num : accum, -1);
};