'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let sum = 0;

  return function calc(num) {
    if (num !== undefined) {
      sum += num;

      return calc;
    }

    const sumSave = sum;

    sum = 0;

    return sumSave;
  };
}

module.exports = makeInfinityAdder;
