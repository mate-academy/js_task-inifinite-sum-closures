'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder(num) {
  // write code here
  let sum = num || 0;

  function next(nextNum) {
    if (nextNum === undefined) {
      const sumRes = sum;

      sum = 0;

      return sumRes;
    } else {
      sum += nextNum;

      return next;
    }
  }

  return next;
}

module.exports = makeInfinityAdder;
