'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = function adder(param) {
    if (arguments.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += param;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
