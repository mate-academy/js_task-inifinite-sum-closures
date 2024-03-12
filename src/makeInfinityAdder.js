'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sum = 0;

  return function add(numbers) {
    if (numbers !== undefined) {
      sum += numbers;
      return add;
    }

    const res = sum;
    sum = 0;
    return res;
  };
}
module.exports = makeInfinityAdder;
