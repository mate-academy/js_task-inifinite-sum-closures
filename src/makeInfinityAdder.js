'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sum = 0;

  const infsum = (x) => {
    if (x || x === 0) {
      sum += x;

      return function(y) {
        return infsum(y);
      };
    }

    const result = sum;

    sum = 0;

    return result;
  };

  return infsum;
}

module.exports = makeInfinityAdder;
