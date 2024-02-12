'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const ADDER = function(value) {
    if (value === undefined) {
      const RESULT = sum;

      sum = 0;

      return RESULT;
    }

    sum += value;

    return ADDER;
  };

  return ADDER;
}

module.exports = makeInfinityAdder;
