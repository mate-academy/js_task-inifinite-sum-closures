'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = num => {
    const res = sum;

    if (!num) {
      sum = 0;

      return res;
    } else {
      sum += num;

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
