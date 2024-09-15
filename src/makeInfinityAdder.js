'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let total = 0;

  return function adder(arg) {
    const resultOnStop = total;

    if (arg === undefined) {
      total = 0;

      return resultOnStop;
    }

    total += arg;

    return adder;
  };
}

module.exports = makeInfinityAdder;
