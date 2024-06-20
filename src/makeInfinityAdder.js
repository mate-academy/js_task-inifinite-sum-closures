'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let internalSum = 0;

  const adder = (number) => {
    const localSum = internalSum;

    if (typeof number === 'undefined') {
      internalSum = 0;

      return localSum;
    }

    internalSum += number;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
