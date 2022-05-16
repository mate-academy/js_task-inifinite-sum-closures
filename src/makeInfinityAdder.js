'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let total = 0;

  const adder = (param) => {
    if (param === undefined) {
      const copySum = total;

      total = 0;

      return copySum;
    }

    total += param;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
