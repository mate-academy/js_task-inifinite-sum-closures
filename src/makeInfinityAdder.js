'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let numbersSum = 0;

  const add = (number) => {
    if (number === undefined) {
      const result = numbersSum;

      numbersSum = 0;

      return result;
    }

    numbersSum += number;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
