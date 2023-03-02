'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (...args) => {
    const returnValue = sum;

    if (!args.length) {
      sum = 0;

      return returnValue;
    }

    sum += args.reduce((acc, curr) => acc + curr, 0);

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
