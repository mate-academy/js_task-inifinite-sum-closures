'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const add = (value) => {
    if (value === undefined) {
      const sumResult = sum;

      sum = 0;

      return sumResult;
    }
    sum += value;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
