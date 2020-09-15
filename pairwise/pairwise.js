// Solution to the pairwise problem: https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/pairwise
// O(n) runtime

function pairwise(arr, arg) {
  var map = new Map();
  var total = 0;
  
  for (let i = 0; i < arr.length; i++) {
    var x = arr[i];
    var y = arg - x; // x+y = arg, find y
 
    if (map.has(y) && map.get(y).length > 0) {
      var j = map.get(y).shift();
      total += i + j;
      continue;
    }

    if (map.has(x)) {
      map.get(x).push(i);
      continue;
    }
 
    map.set(x, [i]);
  }

  return total;
}
