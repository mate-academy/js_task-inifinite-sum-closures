'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  let result = sum;

  const adder = (value) => {
    if (!value) {
      result = sum;
      sum = 0;

      return result;
    }
    sum += value;

    return adder;
  };

  return adder;
}

// function makeInfinityAdder() {
//   const adder = (functions) => {
//     let sum = 0;

//     for (const f of functions) {
//       return f() {

//       }
//     }

//     return sum;
//   };

//   return adder;
// }

module.exports = makeInfinityAdder;
