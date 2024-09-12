'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;
  const adder = (item) => {
    if (item === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }
    sum += item;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
