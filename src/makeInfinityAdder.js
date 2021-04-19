'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  let copySum;

  const adder = (value) => {
    if (value) {
      sum += value;

      return adder;
    } else {
      copySum = sum;
      sum = 0;

      return copySum;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
