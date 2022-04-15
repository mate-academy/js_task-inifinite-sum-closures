'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let adderSum = 0;

  const adder = (digit) => {
    const totalSum = adderSum;

    if (digit === undefined) {
      adderSum = 0;

      return totalSum;
    }
    adderSum += digit;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
