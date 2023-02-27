/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

export const pigIt = (sentence: string): string => {
  return sentence
    .split(' ')
    .map(word => {
      if (!word.match(/[a-zA-Z0-9]/)) return word;
      return word.slice(1) + word.slice(0, 1) + 'ay';
    })
    .join(' ');
};
