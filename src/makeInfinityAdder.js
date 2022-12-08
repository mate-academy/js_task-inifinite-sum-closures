'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  let result;

  const adder = (n) => {
    if (n === undefined) {
      result = sum;
      sum = 0;

      return result;
    }
    sum += n;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
