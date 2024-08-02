'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function adder(val) {
    // reset of sum if no argument coming
    if (val === undefined) {
      const temp = sum;

      sum = 0;

      return temp;
    }

    sum += val;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
