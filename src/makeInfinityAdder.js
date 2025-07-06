'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let sum = 0;
  const adder = (param) => {
    if (param === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    if (param === 0) {
      return adder;
    }

    if (param) {
      sum += param;
    }

    return adder;
  };

  adder.clear = () => sum;

  return adder;
}

module.exports = makeInfinityAdder;
