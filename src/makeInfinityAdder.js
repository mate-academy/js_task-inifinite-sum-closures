'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  let sumIsShowed = false;

  return function adder(number) {
    if (sumIsShowed) {
      sum = 0;
      sumIsShowed = false;
    }

    if (arguments.length === 0) {
      sumIsShowed = true;

      return sum;
    }

    sum += number;

    return adder;
  };
}

module.exports = makeInfinityAdder;
