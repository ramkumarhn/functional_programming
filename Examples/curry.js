//Curry function
/*
    f(a, b, c);
    f = curry(f);
    f(a)(b)(c);
*/

// function curry(f) {
//     return function(a) {
//         return function(b) {
//             return f(a, b);
//         };
//     };
// }
const curry = (
    f, arr = []
  ) => (...args) => (
    a => a.length === f.length ?
      f(...a) :
      curry(f, a)
  )([...arr, ...args]);

function sum(a, b, c) {
    return a + b + c;
}
console.log(sum(2, 3, 4));

let curriedSum = curry(sum);

console.log(curriedSum(2)(3)(4));
