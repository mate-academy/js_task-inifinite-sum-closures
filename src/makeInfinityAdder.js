'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let res = 0;
  let sum = 0;

  const adder = (param) => {
    if (param === undefined) {
      res = sum;

      sum = 0;

      return res;
    }

    sum += param;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
