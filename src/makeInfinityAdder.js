'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  const makeSum = (a) => {
    if (a === undefined) {
      return 0;
    }

    return (b) => {
      if (b === undefined) {
        return a;
      } else {
        return makeSum(a + b);
      }
    };
  };

  return makeSum;
}

module.exports = makeInfinityAdder;
