'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  let temp = 0;

  const adder = (x) => {
    if (x === undefined) {
      temp = sum;
      sum = 0;

      return temp;
    }
    sum += x;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
