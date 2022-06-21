import { cleanWhiteSpaces, expandContractions, killUnicode } from '../src/main';

test('Kill Unicode', () => {
  expect(killUnicode(`it is “Khorzu”`)).toBe('it is "Khorzu"');
  expect(killUnicode(`see you …`)).toBe('see you ...');
  expect(killUnicode(`don’t`)).toBe(`don't`);
});

test('Clean White Spaces', () => {
  expect(cleanWhiteSpaces(`  hello     World   !  \t    \n`)).toBe(
    'hello World !',
  );
});

test('Expand Contractions', () => {
  expect(expandContractions(`Couldn't've`)).toBe('could not have');
});
