'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  const adder = (num) => {
    if (isNaN(num)) {
      const result = sum;
      sum = 0;
      return result;
    }

    sum += num;
    const a = adder;

    return a;
  };

  return adder;
}

module.exports = makeInfinityAdder;
