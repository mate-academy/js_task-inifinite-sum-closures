'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  let res = 0;
  // let count = 0;

  const adder = num => {
    if (num === undefined) {
      res = sum;
      sum = 0;

      return res;
    } else {
      sum += num;
    }

    return adder;
  };

  // if (adder() === undefined) {
  //   sum = 0;

  //   return sum;
  // }

  return adder;
}

module.exports = makeInfinityAdder;
