'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  const adder = (value) => {
    if (value === undefined) {
      const res = sum;

      sum = 0;

      return res;
    }
    sum += value;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
