'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = function (count) {
    if (count === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += count;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
