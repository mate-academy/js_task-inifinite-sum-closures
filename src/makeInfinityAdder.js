'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (a) => {
    if (a === undefined) {
      const tmp = sum;

      sum = 0;

      return tmp;
    } else {
      sum += a;

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
