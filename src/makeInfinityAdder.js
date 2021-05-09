'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sumA = 0;

  const sum = (a) => {
    if (a !== undefined) {
      sumA += a;

      return sum;
    } else {
      const beforeClear = sumA;

      sumA = 0;

      return beforeClear;
    }
  };

  return sum;
}

module.exports = makeInfinityAdder;
