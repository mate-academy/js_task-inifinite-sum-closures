'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (x) => {
    sum += x;

    if (x === undefined) {
      return 0;
    }

    return function(y) {
      if (y === undefined) {
        return sum;
      }

      return adder(y);
    };
  };

  return adder;
}

module.exports = makeInfinityAdder;
