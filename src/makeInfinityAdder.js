'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = (x) => {
    if (typeof x === 'undefined') {
      const result = sum;

      sum = 0;

      return result;
    }

    if (Number.isFinite(x)) {
      sum += x;
    }

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
