'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let accum = 0;

  const adder = (num) => {
    if (num === undefined) {
      const res = accum;

      accum = 0;

      return res;
    }

    accum += num;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
