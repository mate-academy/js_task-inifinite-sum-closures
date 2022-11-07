'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sumOfArgs = 0;

  const makeAdder = (x) => {
    if (x === undefined) {
      const clearSum = sumOfArgs;

      sumOfArgs = 0;

      return clearSum;
    }

    sumOfArgs += x;

    return makeAdder;
  };

  return makeAdder;
}

module.exports = makeInfinityAdder;
