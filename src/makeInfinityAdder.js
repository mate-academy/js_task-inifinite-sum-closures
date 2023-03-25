'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(item) {
    if (item !== undefined) {
      sum += item;

      return adder;
    }

    const sumResult = sum;

    sum = 0;

    return sumResult;
  };
}

module.exports = makeInfinityAdder;
