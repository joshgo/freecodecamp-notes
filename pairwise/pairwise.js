// Solution to the pairwise problem: https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/pairwise
// O(n) runtime

function pairwise(arr, arg) {
  var map = new Map();
  var total = 0;

  arr.forEach((x,i) => {
    var y = arg - x; // x+y = arg, find y

    if (map.has(y) && map.get(y).length > 0) {
      var j = map.get(y).shift();
      total += i + j;
    } else if (map.has(x)) {
      map.get(x).push(i);
    } else {
      map.set(x, [i]);
    }
  });
  
  return total;
}
