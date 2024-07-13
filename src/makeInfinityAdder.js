'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;
  let result = 0;

  const adder = (a) => {
    if (a === undefined) {
      result = sum;
      sum = 0;

      return result;
    }

    sum += a;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
