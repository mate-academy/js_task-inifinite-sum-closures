'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (number) => {
    const result = sum;

    if (number !== undefined) {
      sum += number;

      return adder;
    }

    sum = 0;

    return result;
  };

  return adder;
};

module.exports = makeInfinityAdder;
