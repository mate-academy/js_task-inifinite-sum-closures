'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  return function adder(item) {
    if (item === null || item === undefined) {
      const CURRENT_SUM = sum;

      sum = 0;

      return CURRENT_SUM;
    }

    sum += item;

    return adder;
  };
}

module.exports = makeInfinityAdder;
