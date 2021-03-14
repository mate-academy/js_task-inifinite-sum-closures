'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let wholeSum = 0;

  const nextSum = (nextValue) => {
    if (nextValue) {
      wholeSum += nextValue;

      return nextSum;
    } else {
      const result = wholeSum;

      wholeSum = 0;

      return result;
    }
  };

  return nextSum;
}

module.exports = makeInfinityAdder;
