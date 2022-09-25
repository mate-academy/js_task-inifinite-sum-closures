'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  let result = 0;

  const adder = (num) => {
    if (num === undefined) {
      result = sum;
      sum = 0;

      return result;
    }

    sum += num;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
