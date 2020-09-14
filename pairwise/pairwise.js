// Solution to the pairwise problem: https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/pairwise
// O(n) runtime

function pairwise(arr, arg) {

  var map = new Map();
  for (let i = 0; i < arr.length; i++) {
    var val = arr[i];
    if (map.has(val)) {
      map.get(val).push(i);
    } else {
      map.set(val, [i]);
    }
  }

  var total = 0;
  for (let i = 0; i < arr.length; i++) {
    var val = arr[i];
    var pair = arg - val;

    if (map.get(val).length == 0) continue;
    if (!map.has(pair)) continue;
    if (map.get(pair).length == 0) continue;
    if (pair === val && map.get(pair).length < 2) continue;

    var k = map.get(val).shift();
    var j = map.get(pair).shift();
    total += k + j;
  }

  return total;
}