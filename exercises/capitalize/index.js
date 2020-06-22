// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  return str.replace(/(\s\w|^[a-zA-Z])/g, function (x) {
    return x.toUpperCase();
  });
  //find space followed by character
}

module.exports = capitalize;

// return str
// .replace(/\s\w/g, function (x) {
//   return x.toUpperCase();
// })
// .replace(/^[a-zA-Z]/, function (x) {
//   return x.toUpperCase();
// });
// //find space followed by character
