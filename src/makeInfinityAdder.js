'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;
  const adder = (number) => {
    if (number === undefined) {
      const sumCopy = sum;

      sum = 0;

      return sumCopy;
    }

    sum += number;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
