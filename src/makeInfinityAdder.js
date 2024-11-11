'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let sum = 0;

  const addr = (args) => {
    if (args === 0) {
      return addr;
    }

    if (args === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    if (args) {
      sum += args;

      return addr;
    }
  };

  return addr;
}

module.exports = makeInfinityAdder;
