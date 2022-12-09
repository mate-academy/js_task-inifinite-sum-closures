'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let resultSum = 0;

  const adder = (num) => {
    if (num >= 0) {
      resultSum += num;

      return adder;
    }

    const numValue = resultSum;

    resultSum = 0;

    return numValue;
  };

  return adder;
}

module.exports = makeInfinityAdder;
