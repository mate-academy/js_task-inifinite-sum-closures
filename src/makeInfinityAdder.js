'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = (value) => {
    if (value !== undefined) {
      sum += value;

      return adder;
    }

    const sumCopy = sum;

    sum = 0;

    return sumCopy;
  };

  return adder;
}

module.exports = makeInfinityAdder;
