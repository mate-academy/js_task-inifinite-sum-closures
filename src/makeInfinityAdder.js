'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  const adder = (...n) => {
    if (n.length === 0) {
      const sumForReturn = sum;

      sum = 0;

      return sumForReturn;
    }
    sum += n[0];

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
