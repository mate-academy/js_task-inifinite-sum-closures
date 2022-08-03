'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const addition = (x) => {
    if (x === undefined) {
      const result = sum;

      sum = 0;

      return result;
    } else {
      sum += x;
    }

    return function(y) {
      if (y === undefined) {
        const result = sum;

        sum = 0;

        return result;
      } else {
        sum += y;

        return addition;
      }
    };
  };

  return addition;
}

module.exports = makeInfinityAdder;
