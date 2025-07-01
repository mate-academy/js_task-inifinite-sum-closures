'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let total = 0;

  function adder(...arg) {
    if (arg.length === 0) {
      const result = total;

      total = 0;

      return result;
    }
    total += arg.reduce((acc, num) => acc + num, 0);

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
