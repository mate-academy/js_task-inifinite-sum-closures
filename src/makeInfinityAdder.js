'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sum = 0;

  const adder = (param) => {
    if (param === undefined) {
      const res = sum;

      sum = 0;

      return res;
    }

    sum += param;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
