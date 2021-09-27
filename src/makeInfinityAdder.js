'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const addition = (x) => {
    const result = sum;

    if (x === undefined) {
      sum = 0;

      return result;
    }

    sum += x;

    return addition;
  };

  return addition;
}

module.exports = makeInfinityAdder;
