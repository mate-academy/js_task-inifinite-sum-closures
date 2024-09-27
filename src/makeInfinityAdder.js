'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = (num) => {
    if (num === undefined) {
      const total = sum;

      sum = 0;

      return total;
    }

    sum += num;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
