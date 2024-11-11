'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;
  const adder = (num) => {
    if (num === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum = sum + num;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
