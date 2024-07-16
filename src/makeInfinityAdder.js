'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  function adder(value) {
    let sum = value;

    function innerAdder(nextValue) {
      if (arguments.length === 0) {
        return sum;
      }
      sum += nextValue;

      return innerAdder;
    }

    return innerAdder;
  }

  return adder;
}

module.exports = makeInfinityAdder;

// function makeInfinityAdder() {
//   function adder(value) {
//     let sum = value;
//     function innerAdder(nextValue) {
//       if (arguments.length === 0) {
//         return sum;
//       }
//       sum += nextValue;

//       console.log(sum);
//       return innerAdder;
//     }
//     return innerAdder;
//   }

//   return adder;
// }

// window.makeInfinityAdder = makeInfinityAdder;
