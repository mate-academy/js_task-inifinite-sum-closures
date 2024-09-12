'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let total = 0;

  const adder = (num) => {
    if (num !== undefined) {
      total += num;

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
