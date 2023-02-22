'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder(a = 0) {
  let sum = 0;
  let secondSum;
  const makeAdder = (b) => {
    if (b === undefined) {
      secondSum = sum;
      sum = 0;

      return secondSum;
    }

    sum += a + b;

    return makeAdder;
  };

  return makeAdder;
}

module.exports = makeInfinityAdder;
