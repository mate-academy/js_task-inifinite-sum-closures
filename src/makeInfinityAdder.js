'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (number) => {
    if (number !== undefined) {
      sum += number;

      return adder;
    }

    const sumCopy = sum;

    sum = 0;

    return sumCopy;
  };

  return adder;
}

module.exports = makeInfinityAdder;
