'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;

  function adder(num) {
    if (num === undefined) {
      const saveNum = sum;

      sum = 0;

      return saveNum;
    }

    sum += num;

    return adder;
  }

  return adder;
}

module.exports = makeAdder;
