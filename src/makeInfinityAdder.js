'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  let result;

  const adder = (x) => {
    if (x !== undefined) {
      sum += x;

      return adder;
    }

    result = sum;

    sum = 0;

    return result;
  };

  return adder;
}

module.exports = makeInfinityAdder;
