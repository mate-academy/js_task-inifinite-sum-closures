'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let total = 0;

  const adder = (value) => {
    if (value === undefined) {
      const result = total;

      total = 0;

      return result;
    } else {
      total += value;

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
