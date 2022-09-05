'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const result = (number) => {
    if (number !== undefined) {
      sum += number;

      return result;
    };

    const currentResult = sum;

    sum = 0;

    return currentResult;
  };

  return result;
}

module.exports = makeInfinityAdder;
