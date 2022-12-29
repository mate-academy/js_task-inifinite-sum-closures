'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (number) => {
    const count = sum;

    if (number !== undefined) {
      sum += number;

      return adder;
    } else {
      sum = 0;

      return count;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
