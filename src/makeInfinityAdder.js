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
    if (param >= 0) {
      sum += param;
    } else {
      res = sum;
      sum = 0;

      return res;
    }

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
