/* 
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
*/

function isIsogram(str) {
  const lowercaseStr = str.toLowerCase()
  const letters = []

  for (let i = 0; i < lowercaseStr.length; i++) {
    const letter = lowercaseStr[i]
    if (letters.includes(letter)) {
      return false
    }
    letters.push(letter)
  }

  return true
}