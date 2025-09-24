'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;

  return function adder(x) {
    if (x === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += x;

    return adder;
  };
}

module.exports = makeAdder;
