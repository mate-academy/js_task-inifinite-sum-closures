'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let sum = 0;

  function makeAdder(num) {
    const result = sum;

    if (num !== undefined) {
      sum += num;

      return makeAdder;
    }

    if (num === undefined) {
      sum = 0;

      return result;
    }
  }

  return makeAdder;
}

module.exports = makeInfinityAdder;
