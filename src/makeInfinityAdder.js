'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let getSum = 0;

  const adder = (...args) => {
    if (args.length === 0) {
      const sum = getSum;

      getSum = 0;

      return sum;
    }

    getSum += args.reduce((acc, num) => acc + num, 0);

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
