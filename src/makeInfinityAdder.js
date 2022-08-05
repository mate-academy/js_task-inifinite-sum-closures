'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const addition = (x) => {
    if (typeof x !== 'number') {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += x;

    return addition;
  };

  return addition;
}

module.exports = makeInfinityAdder;
