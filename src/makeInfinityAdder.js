'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (nextValue= null) => {
    if (nextValue === null) {
      const resultWithZero = sum;
      sum = 0;
      return resultWithZero;
    }
    sum += nextValue;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
