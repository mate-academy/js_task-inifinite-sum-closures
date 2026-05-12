'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder(a = 0) {
  let sum = a;
  const adder = function (value) {
    if (value !== undefined) {
      sum += value;

      return adder;
    } else {
      const res = sum;

      sum = 0;

      return res;
    }
  };

  return adder;
}

const makeAdder = makeInfinityAdder;

module.exports = makeAdder;
