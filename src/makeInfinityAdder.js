'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (number) => {
    const thisSum = sum;

    if (number !== undefined) {
      sum += number;

      return adder;
    }
    sum = 0;

    return thisSum;
  };

  return adder;
}

module.exports = makeInfinityAdder;
