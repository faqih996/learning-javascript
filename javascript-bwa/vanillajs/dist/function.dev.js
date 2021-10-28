"use strict";

// function foo(x = 0) {
//   return (x = 1);
// }
// console.log(foo(1));
// const foo = (x = 0) => {
//   return x + 1;
// };
// console.log(foo());
// function addSquare(a, b) {
//   function square(x) {
//     return x * x;
//   }
//   return square(a) + square(b);
// }
// console.log(addSquare(1, 2));
function loop(x) {
  if (x >= 10) return;
  console.log(x);
  loop(x + 1);
}

loop(1);