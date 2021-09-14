'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (a) => {
    if (!a) {
      const copy = sum;

      sum = 0;

      return copy;
    }

    sum = sum + a;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
