'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;

  function adder(num) {
    if (num === undefined) {
      const res = sum;

      sum = 0;

      return res;
    } else {
      sum += num;

      return adder;
    }
  }

  return adder;
}

module.exports = makeAdder;
