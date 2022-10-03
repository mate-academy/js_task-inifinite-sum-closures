'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  let result;

  const adder = (number) => {
    if (number === undefined) {
      result = sum;

      sum = 0;

      return result;
    }

    sum += number;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
