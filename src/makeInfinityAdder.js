'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const resultFunc = (number) => {
    if (number === undefined) {
      const tempSum = sum;

      sum = 0;

      return tempSum;
    }
    sum += number;

    return resultFunc;
  };

  return resultFunc;
}

module.exports = makeInfinityAdder;
