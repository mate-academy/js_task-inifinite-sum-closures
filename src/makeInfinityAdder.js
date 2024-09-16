'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function adder(n) {
    if (!isNaN(n)) {
      sum += n;

      return adder;
    }

    const temp = sum;

    sum = 0;

    return temp;
  }

  return adder;
}

module.exports = makeInfinityAdder;
