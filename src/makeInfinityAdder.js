'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const x = (operand) => {
    if (operand !== undefined) {
      sum += operand;

      return x;
    } else {
      const result = sum;

      sum = 0;

      return result;
    }
  };

  return x;
}

module.exports = makeInfinityAdder;
