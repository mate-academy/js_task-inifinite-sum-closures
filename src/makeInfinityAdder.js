'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = (num) => {
    let innerSum = 0;

    if (num !== undefined) {
      sum += num;

      return adder;
    }

    innerSum = sum;

    if (num === undefined) {
      sum = 0;

      return innerSum;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
