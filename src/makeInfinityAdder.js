'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = (el) => {
    if (el === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += el;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
