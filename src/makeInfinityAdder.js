'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let resSum = 0;

  return function adder(a) {
    if (a !== undefined) {
      resSum += a;

      return adder;
    }

    const resTmp = resSum;

    resSum = 0;

    return resTmp;
  };
}
module.exports = makeInfinityAdder;
