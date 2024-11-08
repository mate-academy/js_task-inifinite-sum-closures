'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let total = 0;

  const adder = (value) => {
    if (value !== undefined) {
      total += value;

      return adder;
    } else {
      const result = total;

      total = 0;

      return result;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
