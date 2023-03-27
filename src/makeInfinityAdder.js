'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  let count = 0;

  const adder = num => {
    if (num === undefined) {
      count++;

      if (count > 2) {
        sum = 0;
        count = 0;

        return sum;
      }

      return sum;
    }

    sum += num;

    return adder;
  };

  if (adder() === undefined) {
    return 0;
  }

  return adder;
}

module.exports = makeInfinityAdder;
