'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let result = 0;
  let sum = 0;

  const adder = (value) => {
    if (value !== undefined) {
      sum += value;

      return adder;
    } else {
      result = sum;
      sum = 0;

      return result;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
