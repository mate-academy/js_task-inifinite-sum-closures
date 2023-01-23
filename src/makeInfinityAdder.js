'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const result = (x = null) => {
    if (x === null) {
      const stop = sum;

      sum = 0;

      return stop;
    } else {
      sum += x;

      return result;
    }
  };

  return result;
};

module.exports = makeInfinityAdder;
