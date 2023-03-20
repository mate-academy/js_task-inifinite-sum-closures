'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  const functionA = numberA => {
    if (numberA === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += numberA;

    const functionB = numberB => {
      if (numberB === undefined) {
        const result = sum;

        sum = 0;

        return result;
      }
      sum += numberB;

      return functionA;
    };

    return functionB;
  };

  return functionA;
}
module.exports = makeInfinityAdder;
