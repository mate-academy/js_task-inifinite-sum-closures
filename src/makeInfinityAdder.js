'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sum = 0;

  const addNum = function(value) {
    if (arguments.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += value;

    return addNum;
  };

  return addNum;
}

module.exports = makeInfinityAdder;
