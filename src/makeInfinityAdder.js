'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  return function adler(...nums) {
    if (arguments.length === 0) {
      const add = result;

      result = 0;

      return add;
    }
    result += nums.reduce((sum, num) => sum + num, 0);

    return adler;
  };
}

module.exports = makeInfinityAdder;
