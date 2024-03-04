'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = [];

  const adder = (a) => {
    if (a || a === 0) {
      sum.push(a);
    } else {
      const copySum = [...sum];

      sum = [];

      return copySum.reduce((prev, b) => prev + b, 0);
    }

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
