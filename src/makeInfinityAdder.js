'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  const summarize = (prevValue) => {
    let wholeSum = prevValue;

    if (prevValue) {
      const nextSum = (nextValue) => {
        if (nextValue) {
          wholeSum += nextValue;

          return nextSum;
        } else {
          return wholeSum;
        }
      };

      return nextSum;
    } else {
      return 0;
    }
  };

  return summarize;
}

module.exports = makeInfinityAdder;
