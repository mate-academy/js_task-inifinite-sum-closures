'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;
  let sum = 0;

  return function makeAdder(value1) {
    if (!value1) {
      if (result !== 0) {
        sum = result;
        result = 0;

        return sum;
      }

      return result;
    }
    result += value1;

    return function adder(value2) {
      if ((!value2) && (value2 !== 0)) {
        sum = result;
        result = 0;

        return sum;
      }
      result += value2;

      return adder;
    };
  };
}

module.exports = makeInfinityAdder;
