'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;

  function add(...args) {
    if (args.length === 0) {
      const currentSum = sum;

      sum = 0;

      return currentSum;
    }

    sum += args[0];

    return add;
  }

  return add;
}

module.exports = makeAdder;
