'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // first solution

  // function adder(a) {
  //   if (typeof a === 'undefined') {
  //     return 0;
  //   }

  //   function makeAdder(b) {
  //     if (typeof b !== 'undefined') {
  //       return adder(a + b);
  //     } else {
  //       return a;
  //     }
  //   }

  //   return makeAdder;
  // }

  // return adder;

  // short solution
  const adder = a => typeof a !== 'undefined'
    ? b => typeof b !== 'undefined'
      ? adder(a + b)
      : a
    : 0;

  return adder;
}

module.exports = makeInfinityAdder;
