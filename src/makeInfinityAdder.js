'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  const functionA = a => {
    if (a === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += a;

    const functionB = b => {
      if (b === undefined) {
        const result = sum;

        sum = 0;

        return result;
      }
      sum += b;

      return functionA;
    };

    return functionB;
  };

  return functionA;
}
module.exports = makeInfinityAdder;
