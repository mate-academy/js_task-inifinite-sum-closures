'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(numb) {
    if (numb !== undefined) {
      sum += numb;

      return adder;
    };

    const resultSum = sum;

    sum = 0;

    return resultSum;
  };
};

module.exports = makeInfinityAdder;
