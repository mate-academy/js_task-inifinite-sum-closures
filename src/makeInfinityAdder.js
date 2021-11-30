'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let r = 0;
  let count = 0;

  const result = function adder(x) {
    if (count === 0 && x === undefined) {
      r = 0;
    };

    if (x === undefined) {
      count = 0;

      return r;
    };

    if (x !== undefined) {
      count++;
      r = r + x;
    };

    return adder;
  };

  return result;
};
module.exports = makeInfinityAdder;
