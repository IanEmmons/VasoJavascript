// === Easy, but O(n^2) =========================

var arr = [79, 5, 18, 5, 32, 1, 16, 1, 82, 13];
var sorted = arr.slice().sort(function(a,b){return b-a})
var ranks = arr.map(function(v){ return sorted.indexOf(v)+1 });
console.log(ranks);

// === More sophisticated =======================

function cmp_rnum(a,b) {
	// comparison function: reverse numeric order
	return b-a;
}
function index_map(acc, item, index) {
	// reduction function to produce a map of array items to their index
	acc[item] = index;
	return acc;
}
function ranks(v) {
	var rankindex = v.slice().sort(cmp_rnum).reduceLeft(index_map, Object.create(null));
	// reduceLeft() is used so the lowest rank wins if there are duplicates
	// use reduce() if you want the highest rank
	return v.map(function(item){ return rankindex[item]+1; });
}
