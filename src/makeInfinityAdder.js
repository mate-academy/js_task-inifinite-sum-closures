'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (value) => {
    if (value === undefined && sum === 0) {
      return 0;
    }

    if (value === undefined && sum !== 0) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += value;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
