'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  const adder = (number) => {
    if (number !== undefined) {
      sum += number;

      return adder;
    }

    const value = sum;

    sum = 0;

    return value;
  };

  return adder;
}

module.exports = makeInfinityAdder;
