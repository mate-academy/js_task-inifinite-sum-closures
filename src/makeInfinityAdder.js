'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (number) => {
    const lastValue = sum;

    if (number === undefined) {
      sum = 0;

      return lastValue;
    }

    sum += number;

    return adder;
  };

  adder.toString = () => {
    return sum;
  };

  return adder;
}

module.exports = makeInfinityAdder;
