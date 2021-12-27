'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (num) => {
    const newSum = sum;

    if (typeof (num) === 'number') {
      sum += num;

      return adder;
    }

    sum = 0;

    return newSum;
  };

  return adder;
}

module.exports = makeInfinityAdder;
