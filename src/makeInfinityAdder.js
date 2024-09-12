'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const makeAdder = function(a) {
    if (a === undefined) {
      const lastSum = sum;

      sum = 0;

      return lastSum;
    } else {
      sum += a;

      return makeAdder;
    }
  };

  return makeAdder;
}

module.exports = makeInfinityAdder;
