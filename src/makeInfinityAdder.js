'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = function makeAdder(a) {
    if (typeof a === 'number') {
      sum += a;

      return makeAdder;
    }

    const result = sum;

    sum = 0;

    return result;
  };

  return adder;
}

module.exports = makeInfinityAdder;
