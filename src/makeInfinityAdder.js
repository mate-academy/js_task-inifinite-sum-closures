'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  // write code here
  let sum = 0;

  return function adder(a) {
    const sumCopy = sum;

    if (a === undefined) {
      sum = 0;

      return sumCopy;
    } else {
      sum += a;

      return adder;
    }
  };
}

module.exports = makeAdder;
