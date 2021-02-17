'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function makeAdder(value) {
    const newSum = sum;

    if (value === undefined) {
      sum = 0;

      return newSum;
    };
    sum += value;

    return makeAdder;
  };
}

module.exports = makeInfinityAdder;
