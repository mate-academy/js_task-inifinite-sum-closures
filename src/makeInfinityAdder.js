'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder(currentNum) {
  let amount = currentNum || 0;

  function sum(nextNum) {
    if (nextNum !== undefined) {
      amount += nextNum;

      return sum;
    } else {
      const result = amount;

      amount = 0;

      return result;
    }
  }

  return sum;
}

module.exports = makeInfinityAdder;
