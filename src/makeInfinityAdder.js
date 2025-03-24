'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let total = 0;

  const adder = (arg = null) => {
    if (arg === null) {
      const res = total;

      total = 0;

      return res;
    } else {
      total += arg;

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
