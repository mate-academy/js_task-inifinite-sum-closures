'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function add(number) {
    if (number === undefined) {
      const returnedValue = sum;

      sum = 0;

      return returnedValue;
    }
    sum += number;

    return add;
  };
}

module.exports = makeInfinityAdder;
