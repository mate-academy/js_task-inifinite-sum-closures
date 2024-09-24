'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder(num) {
  let sum = num || 0;
  let sumReserve = 0;

  function result(nextNum) {
    sumReserve = 0;

    if (nextNum === undefined) {
      sumReserve = sum;
      sum = 0;

      return sumReserve;
    }

    sum += nextNum;

    return result;
  }

  return result;
}

module.exports = makeInfinityAdder;
