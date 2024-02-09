'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (...number) => {
    if (!number.length) {
      const sumCopy = sum;

      sum = 0;

      return sumCopy;
    } else {
      sum += number[0];
    }

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
