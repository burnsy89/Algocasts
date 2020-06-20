// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  var a = Math.abs(n).toString();

  var b = Math.sign(n);
  var 
  var a = ParseInt(b + a.split('').reverse().join(''));
  return a;
}

module.exports = reverseInt;
