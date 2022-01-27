'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  const adder = (a) => {
    let sum = 0;

    if (a === undefined) {
      return sum;
    }

    sum += a;

    const add = (b) => {
      if (b === undefined) {
        return sum;
      }

      sum += b;

      return add;
    };

    return add;
  };

  return adder;
}

module.exports = makeInfinityAdder;
