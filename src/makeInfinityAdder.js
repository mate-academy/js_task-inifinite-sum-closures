'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let result = 0;

  return function(a) {
    if (a === undefined) {
      result = 0;

      return 0;
    }
    result += a;

    const getSum = (b) => {
      if (b === undefined) {
        return result;
      }
      result += b;

      return getSum;
    };

    return getSum;
  };
};

module.exports = makeInfinityAdder;
