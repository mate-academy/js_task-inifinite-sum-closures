'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const makeAdder = (...input) => {
    if (input.length > 0) {
      sum += input[0];

      return makeAdder;
    } else {
      const newSum = sum;

      sum = 0;

      return newSum;
    }
  };

  return makeAdder;
}

module.exports = makeInfinityAdder;
