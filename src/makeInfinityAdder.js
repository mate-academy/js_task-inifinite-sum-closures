'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (item) => {
    if (item >= 0) {
      sum += item;

      return adder;
    }

    const sumValue = sum;

    sum = 0;

    return sumValue;
  };

  return adder;
}

module.exports = makeInfinityAdder;
