'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sum = 0;
  let result = 0;
  const adder = (...val) => {
    if (val.length > 0) {
      sum += +val;

      return adder;
    } else {
      result = sum;
      sum = 0;

      return result;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
