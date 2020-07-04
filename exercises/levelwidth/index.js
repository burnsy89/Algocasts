// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const arr = [root];
  const res = [];
  while (arr.length) {
    let children = [];
    res.push(arr.length);
    while (arr.length) {
      children.push(...arr.shift().children);
    }
    arr.push(...children);
  }

  return res;
}

module.exports = levelWidth;
