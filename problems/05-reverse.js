/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

***********************************************************************/

function reverse(str, count = str.length, newArr = []) {
  //base case
  if (count > 0) {
    count--;
    newArr.push(str[count]);
    reverse(str, count, newArr);
  }
  return newArr.join("");
}

console.log(reverse("house")); // "esuoh"
console.log(reverse("dog")); // "god"
console.log(reverse("atom")); // "mota"
console.log(reverse("q")); // "q"
console.log(reverse("id")); // "di"
console.log(reverse("")); // ""

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
