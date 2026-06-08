'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;

  return function adder(value) {
    if (value === undefined) {
      const result = sum;

      sum = 0;

      return result;
    } else {
      sum += value;
    }

    return adder;
  };
}

module.exports = makeAdder;
