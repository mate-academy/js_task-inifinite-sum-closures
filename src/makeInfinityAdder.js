'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (number) => {
    if (number === undefined) {
      const returnedValue = sum;

      sum = 0;

      return returnedValue;
    };

    sum += number;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
