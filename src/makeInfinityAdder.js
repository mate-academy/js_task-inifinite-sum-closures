'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let resultToReturn = 0;
  let sum = 0;

  const adder = (a) => {
    if (a !== undefined) {
      sum += a;

      return adder;
    }
    resultToReturn = sum;
    sum = 0;

    return resultToReturn;
  };

  return adder;
}

module.exports = makeInfinityAdder;
