'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function result(nextNum) {
    if (nextNum === undefined) {
      const number = sum; 

      sum = 0; 

      return number;
    }

    sum += nextNum;

    return result;
  }

  return result;
}

module.exports = makeInfinityAdder;
