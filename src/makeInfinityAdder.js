'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  const adder = (num = 'nothing passed') => {
    if (num === 'nothing passed') {
      const pseudoSum = sum;

      sum = 0;

      return pseudoSum;
    }

    sum += num;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
