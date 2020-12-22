'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sumDigits = 0;

  const adder = digit => {
    if (digit !== undefined) {
      sumDigits += digit;

      return adder;
    }

    const temp = sumDigits;

    sumDigits = 0;

    return temp;
  };

  return adder;
}

module.exports = makeInfinityAdder;
