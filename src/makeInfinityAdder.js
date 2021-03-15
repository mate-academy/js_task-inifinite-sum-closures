'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (input) => {
    if (input === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += input;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
