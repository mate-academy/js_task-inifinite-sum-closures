'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let numbersSum = 0;

  const adder = function (a) {
    if (a === undefined) {
      const reset = numbersSum;

      numbersSum = 0;

      return reset;
    }
    numbersSum += a;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
