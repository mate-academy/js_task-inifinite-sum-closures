'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sum = 0;

  return function result(number) {
    if (number !== undefined) {
      sum += number;

      return result;
    }

    const answer = sum;

    sum = 0;

    return answer;
  };
}

module.exports = makeInfinityAdder;
