'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function add(num) {
    if (typeof num !== 'number') {
      const result = sum;

      sum = 0;

      return result;
    }
    sum += num;

    return add;
  };
}
module.exports = makeInfinityAdder;
