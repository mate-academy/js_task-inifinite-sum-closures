'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = function (n) {
    if (n !== undefined) {
      sum += n;

      return adder;
    }

    const result = sum;

    sum = 0;

    return result;
  };

  return adder;
}

module.exports = makeInfinityAdder;
