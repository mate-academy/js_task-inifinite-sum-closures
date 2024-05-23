'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  return function myFunc(x) {
    const result = sum;

    if (x === undefined) {
      sum = 0;

      return result;
    }
    sum = result + x;

    return myFunc;
  };
}

module.exports = makeInfinityAdder;
