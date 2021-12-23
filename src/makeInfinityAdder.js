'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sum = 0;

  const add = (value) => {
    if (value === undefined) {
      const sumResult = sum;

      sum = 0;

      return sumResult;
    } else {
      sum += value;

      return add;
    }
  };

  return add;
}

module.exports = makeInfinityAdder;
