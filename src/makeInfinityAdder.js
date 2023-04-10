'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  const result = (x) => {
    if (x === undefined) {
      const amount = sum;

      sum = 0;

      return amount;
    } else {
      sum += x;

      return result;
    }
  };

  return result;
}

module.exports = makeInfinityAdder;
