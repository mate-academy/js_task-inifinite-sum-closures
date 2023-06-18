'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adler(num) {
    if (num === undefined) {
      const add = sum;

      sum = 0;

      return add;
    };

    sum += num;

    return adler;
  };
}

module.exports = makeInfinityAdder;
