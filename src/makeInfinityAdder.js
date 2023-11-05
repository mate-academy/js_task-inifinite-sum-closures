'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let totalSum = 0;

  return function add(a) {
    const compSum = totalSum;
    const numberIn = a;

    if (numberIn || numberIn === 0) {
      totalSum += numberIn;

      return add;
    } else {
      totalSum = 0;

      return compSum;
    }
  };
}

module.exports = makeInfinityAdder;
