'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function add(a) {
    if (a === undefined) {
      const answer = sum;

      sum = 0;

      return answer;
    } else {
      sum += a;

      return add;
    }
  };
}

module.exports = makeInfinityAdder;
