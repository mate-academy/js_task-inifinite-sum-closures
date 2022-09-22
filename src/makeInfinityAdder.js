'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (num) => {
    if (typeof num !== 'number') {
      const finalSum = sum;

      sum = 0;

      return finalSum;
    }
    sum += num;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
