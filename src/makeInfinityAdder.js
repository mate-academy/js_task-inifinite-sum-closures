'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder(num = 0) {
  let sum = num;

  function inner(nextNum) {
    if (nextNum === undefined) {
      const temp = sum;

      sum = 0;

      return temp;
    }
    sum += nextNum;

    return inner;
  }

  return inner;
}

module.exports = makeInfinityAdder;
