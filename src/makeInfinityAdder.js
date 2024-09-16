'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function addr(arg) {
    if (arg === undefined) {
      const tempSum = sum;

      sum = 0;

      return tempSum;
    }

    sum += arg;

    return addr;
  };

  return addr;
}

module.exports = makeInfinityAdder;
