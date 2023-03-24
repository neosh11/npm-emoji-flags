import emojiFlags from '../index';

test('Test flags', () => {
  // expect the words to be an empty array
  expect(emojiFlags.flags.AD).toEqual({
    emoji: '🇦🇩',
    unicode: 'U+1F1E6 U+1F1E9',
    name: 'Andorra',
  });

  expect(emojiFlags.getAllFlags().length).toEqual(251);
  expect(emojiFlags.getAllCodes().length).toEqual(251);
  expect(emojiFlags.getAllUnicode().length).toEqual(251);
  expect(emojiFlags.getAllNames().length).toEqual(251);
});
