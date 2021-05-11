'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const makeAdder = function(num) {
    if (num === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }
    sum += num;

    return makeAdder;
  };

  return makeAdder;
}

module.exports = makeInfinityAdder;
