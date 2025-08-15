'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;
  const adder = (num) => {
    if (num === undefined) {
      const oldSum = sum;

      sum = 0;

      return oldSum;
    } else {
      sum += num;

      return adder;
    }
  };

  return adder;
}

module.exports = makeAdder;
