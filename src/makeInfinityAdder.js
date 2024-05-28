'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let totalSum = 0;

  const makeAdder = (number) => {
    if (number === undefined) {
      const result = totalSum;

      totalSum = 0;

      return result;
    } else {
      totalSum += number;

      return makeAdder;
    }
  };

  return makeAdder;
}

module.exports = makeInfinityAdder;
