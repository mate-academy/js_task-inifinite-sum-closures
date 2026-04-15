'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  // write code here
  let sum = 0;

  function adder(...arg) {
    if (arg.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum = arg.reduce((acc, num) => acc + num, sum);

    return adder;
  }

  return adder;
}

module.exports = makeAdder;
