'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;

  const adder = (num) => {
    if (num === undefined) {
      const storeSum = sum;

      sum = 0;

      return storeSum;
    }
    sum += num;

    return adder;
  };

  return adder;
}

module.exports = makeAdder;
