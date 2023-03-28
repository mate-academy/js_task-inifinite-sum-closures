'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  let res = 0;

  const adder = num => {
    if (num === undefined) {
      res = sum;
      sum = 0;

      return res;
    }

    sum += num;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
