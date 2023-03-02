/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

export class Kata {
  static getCount(str: string): number {
    let count = 0;

    for (let letter of str) if (letter.match(/[aeiou]/i)) count++;

    return count;
  }
}
