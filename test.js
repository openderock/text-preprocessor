import test from 'ava';
import preprocessor from './index.js';

test('handling contractions', t => {
    const words = preprocessor(`that's great! but don’t take to long okay?`);
    t.is(words[0].vocabulary, 'great');
    t.is(words[1].vocabulary, 'long');
});