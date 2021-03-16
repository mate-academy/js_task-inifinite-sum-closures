'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (number) => {
    const result = sum;

    if (number === undefined) {
      sum = 0;

      return result;
    }

    sum += number;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
