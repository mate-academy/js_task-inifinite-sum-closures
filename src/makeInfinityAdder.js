'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder(a) {
  // write code here
  let addition = 0;
  let result;

  const adder = (b) => {
    if (b === undefined) {
      result = addition;
      addition = 0;

      return result;
    } else {
      addition += b;

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
