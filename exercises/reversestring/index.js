// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function newFunction(rev, char) {
  return char + rev;
}

function reverse(str) {
  return str.split('').reduce(newFunction);
}

module.exports = reverse;

// function reverse(str) {
//   return str
//     .split('')
//     .reduce((reversed, character) => character + reversed, '');
// }

// function reverse(str) {
//   let reversed = '';
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }
