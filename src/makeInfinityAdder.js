'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = (a) => {
    if (typeof a === 'undefined') {
      const copy = sum;

      sum = 0;

      return copy;
    }

    sum += a;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
