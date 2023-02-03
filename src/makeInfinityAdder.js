'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;
  let sum = 0;
  const adder = (a = null) => {
    if (a === null) {
      sum = result;
      result = 0;

      return sum;
    } else {
      result += a;

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
