'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sumOfNumber = 0;
  const adder = (number) => {
    if (number === undefined) {
      const result = sumOfNumber;

      sumOfNumber = 0;

      return result;
    }
    sumOfNumber += number;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
