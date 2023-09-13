'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  const adder = (a) => {
    if (typeof a !== 'number') {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += a;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
