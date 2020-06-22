// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const charMapA = {}; charMapB = {};
    let a = stringA.replace(/\W/g,'').toUpperCase();
    let b = stringB.replace(/\W/g,'').toUpperCase();
    if (a.length !== b.length) {
        return false;
    } 
    a.split('').forEach((char) => (charMapA[char] = 1 + charMapA[char] || 1));
    b.split('').forEach((char) => (charMapB[char] = 1 + charMapB[char] || 1));

    for (let char in charMapA) {
        if (charMapA[char] !== charMapB[char]) {
            return false
        }
    }

    return true;


}
    
module.exports = anagrams;
