'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = (num) => {
    if (num !== undefined) {
      sum += num;

      return adder;
    }

    const copySum = sum;

    sum = 0;

    return copySum;
  };

  return adder;
}

module.exports = makeInfinityAdder;
