'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  let sumIsShowed = 0;

  return function adder(number) {
    if (sumIsShowed > 0) {
      sum = 0;
      sumIsShowed = 0;
    }

    if (arguments.length === 0) {
      sumIsShowed++;

      return sum;
    }

    sum += number;

    return adder;
  };
}

module.exports = makeInfinityAdder;
