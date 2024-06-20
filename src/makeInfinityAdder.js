'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let internalSum = 0;

  const adder = (number) => {
    if (typeof number === 'undefined') {
      const localSum = internalSum;

      internalSum = 0;

      return localSum;
    }

    internalSum += number;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
