'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  return function adder(numb) {
    if (numb === undefined) {
      const lastSum = sum;

      sum = 0;

      return lastSum;
    }

    sum += numb;

    return adder;
  };
}

module.exports = makeInfinityAdder;
