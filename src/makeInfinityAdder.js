'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (num) => {
    const newSum = sum;

    if (num !== undefined) {
      sum += num;

      return adder;
    }

    if (!num) {
      sum = 0;

      return newSum;
    } else {
      sum += num;
    }

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
