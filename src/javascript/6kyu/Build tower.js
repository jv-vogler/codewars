/*
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/

function towerBuilder(nFloors) {
  const tower = [];
  let baseLength = nFloors * 2 - 1;

  for (let i = 0; i < nFloors; i++) {
    const line = ' '.repeat(i) + '*'.repeat(baseLength) + ' '.repeat(i);
    tower.push(line);
    baseLength -= 2;
  }

  return tower.reverse();
}