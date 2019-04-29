import test from 'ava';
import preprocessor from './index.js';

test('trim', t => {
    const output = preprocessor('    Hi    There   ').trim().toString();
    t.is(output, 'Hi    There');
});
test('toLowerCase', t => {
    const output = preprocessor('    Hi    There   ').trim().toLowerCase().toString();
    t.is(output, 'hi    there');
});
test('expandContractions', t => {
    const output = preprocessor(`that's great!`).expandContractions().toString();
    t.is(output, 'that is great!');
});
// test('handling contractions', t => {
//     const output = preprocessor(`that's great! but don’t take to long okay?`);
//     t.is(output, 'great');
// });