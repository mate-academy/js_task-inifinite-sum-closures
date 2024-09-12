'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let sum = 0;
  const adder = (number) => {
    if (number === undefined) {
      const value = sum;

      sum = 0;

      return value;
    }

    sum += number;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
