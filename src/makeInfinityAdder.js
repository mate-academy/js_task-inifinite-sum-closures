'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const add = (number) => {
    if (number !== undefined) {
      sum += number;

      return add;
    } else {
      const finallySum = sum;

      sum = 0;

      return finallySum;
    }
  };

  return add;
}

module.exports = makeInfinityAdder;
