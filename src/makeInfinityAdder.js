'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const add = (operand) => {
    if (operand === undefined) {
      const final = sum;

      sum = 0;

      return final;
    }

    sum += operand;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
