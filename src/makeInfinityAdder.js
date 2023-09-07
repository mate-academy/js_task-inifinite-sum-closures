'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sumOfNumbers = 0;

  const adder = (a) => {
    let result = 0;

    if (a || a === 0) {
      sumOfNumbers += a;

      return adder;
    }

    result = sumOfNumbers;
    sumOfNumbers = 0;

    return result;
  };

  return adder;
}

module.exports = makeInfinityAdder;
