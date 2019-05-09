import * as wns from '../src/index';

describe('webpack-numbers unit test', () => {
    let refs: Array<{ num: number, word: string }>;
    let webpackNumbers: any;
    beforeAll(() => {
        refs = [{
            num: 1,
            word: 'One',
        }, {
            num: 2,
            word: 'Two',
        }, {
           num: 3,
            word: 'Three',
        }, {
           num: 4,
            word: 'Four',
        }, {
           num: 5,
            word: 'Five',
        }, {
           num: 0,
            word: 'Zero',
        }];
        webpackNumbers = wns;
        console.log(webpackNumbers);
    })
    it('numToWord', () => {
        refs.forEach((ref) => {
            expect(webpackNumbers.numToWord(ref.num)).toEqual(ref.word);
        });
    });
    it('wordToNum', () => {
        refs.forEach((ref) => {
            expect(webpackNumbers.wordToNum(ref.word)).toEqual(ref.num);
        });
    });
});
