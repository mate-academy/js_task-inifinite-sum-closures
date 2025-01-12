'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = (arg) => {
    if (arg === undefined) {
      const result = sum;

      sum = 0;

      return result;
    } else {
      sum += arg;

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
