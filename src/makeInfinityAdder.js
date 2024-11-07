'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sumOfNumbers = 0;

  const adder = (number) => {
    if (number === undefined) {
      const result = sumOfNumbers;

      sumOfNumbers = 0;

      return result;
    }

    sumOfNumbers += number;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
