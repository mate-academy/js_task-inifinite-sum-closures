'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  const adder = (num) => {
    if (num === undefined) {
      const x = sum;

      sum = 0;

      return x;
    } else {
      sum += num;

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
