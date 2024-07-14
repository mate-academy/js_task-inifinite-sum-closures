'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let result = 0;

  return function makeAdder(arg) {
    if (arg || arg === 0) {
      result += arg;

      return makeAdder;
    } else {
      const currentSum = result;

      result = 0;

      return currentSum;
    }
  };
}

module.exports = makeInfinityAdder;
