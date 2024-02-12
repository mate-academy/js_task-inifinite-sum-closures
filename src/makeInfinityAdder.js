'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  let result = 0;

  const adder = (arg) => {
    if (arg === undefined) {
      result = sum;
      sum = 0;

      return result;
    } else {
      sum += arg;

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
