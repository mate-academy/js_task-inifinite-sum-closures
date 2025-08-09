'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;

  const adder = (num) => {
    if (num === undefined) {
      const innerSum = sum;

      sum = 0;

      return innerSum;
    }
    sum += num;

    return adder;
  };

  return adder;
}

module.exports = makeAdder;
